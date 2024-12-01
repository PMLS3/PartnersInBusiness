import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import { useFirebase } from "./useFirebase"

export const useFirebaseAuth = () => {
  const { auth } = useFirebase()

  const registerFirebaseUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      return {
        type: "register-success",
        data: userCredential.user,
        message: "Registration successful",
      }
    } catch (error: any) {
      return {
        type: "register-error",
        message: error.message,
      }
    }
  }

  const loginFirebaseUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      return {
        type: "login-success",
        data: userCredential.user,
        message: "Login successful",
      }
    } catch (error: any) {
      return {
        type: "login-error",
        message: error.message,
      }
    }
  }

  const recoverPassword = async (email: string) => {
    return sendPasswordResetEmail(auth, email)
  }

  return {
    registerFirebaseUser,
    loginFirebaseUser,
    recoverPassword,
  }
}
