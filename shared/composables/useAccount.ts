import { useFirebaseAuth } from "./useFirebaseAuth"
import { useWorkspace } from "./useWorkspace"
import { useUser } from "./useUser"

export const useAccount = () => {
  const { registerFirebaseUser, loginFirebaseUser, recoverPassword } =
    useFirebaseAuth()
  const { createWorkspace, setupWorkspace } = useWorkspace()
  const { user, profile } = useUser()
  const router = useRouter()
  const toaster = useToaster()

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      // Register with Firebase
      const firebaseResult = await registerFirebaseUser(email, password)

      if (firebaseResult.type !== "register-success") {
        throw new Error(firebaseResult.message)
      }

      // Create workspace and profile
      const workspaceResult = await setupWorkspace({
        name: `${username}'s Workspace`,
        owner: firebaseResult.data.uid,
        description: `Main workspace for ${username}`,
        theme: "default",
        type: "main",
      })

      if (!workspaceResult) {
        throw new Error("Failed to create workspace")
      }

      toaster.show({
        title: "Success",
        message: "Account created successfully",
        color: "success",
        icon: "ph:user-circle-fill",
        closable: true,
      })

      router.push("/auth/login-1")
      return true
    } catch (error: any) {
      toaster.show({
        title: "Error",
        message: error.message,
        color: "danger",
        icon: "ph:warning-circle-fill",
        closable: true,
      })
      return false
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const result = await loginFirebaseUser(email, password)

      if (result.type !== "login-success") {
        throw new Error(result.message)
      }

      user.value = result.data
      router.push("/dashboards")
      return true
    } catch (error: any) {
      toaster.show({
        title: "Error",
        message: error.message,
        color: "danger",
        icon: "ph:warning-circle-fill",
        closable: true,
      })
      return false
    }
  }

  const recover = async (email: string) => {
    try {
      await recoverPassword(email)
      toaster.show({
        title: "Success",
        message: "Recovery email sent",
        color: "success",
        icon: "ph:envelope-fill",
        closable: true,
      })
      return true
    } catch (error: any) {
      toaster.show({
        title: "Error",
        message: error.message,
        color: "danger",
        icon: "ph:warning-circle-fill",
        closable: true,
      })
      return false
    }
  }

  return {
    register,
    login,
    recover,
    user,
    profile,
  }
}
