import { initializeServerApp } from "firebase/app"
import { getVertexAI, getGenerativeModel } from "firebase/vertexai"
import {
  browserSessionPersistence,
  connectAuthEmulator,
  getAuth,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import {
  connectDataConnectEmulator,
  getDataConnect,
} from "firebase/data-connect"
import { connectorConfig } from "one-person-empire"

export const useFirebaseServer = (authIdToken: string | undefined) => {
  const config = useRuntimeConfig()

  // const test: any = process.env.NODE_ENV === "development"
  const test = true
  const firebaseConfig: any = config.firebaseConfig

  const firebaseApp = initializeServerApp(firebaseConfig, {
    authIdToken: authIdToken ?? undefined,
  })
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  const storage = null
  const messaging = null

  const vertexAI = getVertexAI(firebaseApp)
  const model = getGenerativeModel(vertexAI, {
    model: "gemini-1.5-flash-preview-0514",
  })

  // if (process.client) {
  //   messaging = getMessaging(firebaseApp)
  //   storage = getStorage(firebaseApp)
  // }

  let dataConnect = null
  if (!dataConnect) dataConnect = getDataConnect(firebaseApp, connectorConfig)

  // const host = (firestore.toJSON() as { settings?: { host?: string } }).settings?.host ?? ''
  // console.log('host', host)

  if (test) {
    // if (!host.startsWith('localhost')) {
    connectFirestoreEmulator(firestore, "localhost", 8080)
    // }

    // connectStorageEmulator(storage, 'localhost', 9199)
    const authUrl = test ? "http://localhost:9099" : "http://127.0.0.1:9099"

    try {
      connectAuthEmulator(auth, authUrl)
    } catch (error) {
      console.error("Error connecting to Auth Emulator:", error)
    }

    if (dataConnect && !dataConnect.isEmulator) {
      connectDataConnectEmulator(dataConnect, "localhost", 9399)
    }
  }

  setPersistence(auth, browserSessionPersistence).catch((err) => {
    console.error("Error enabling persistence: ", err)
  })

  return {
    firebaseApp,
    firestore,
    auth,
    vertexAI,
    model,
    storage,
    onAuthStateChanged,
    dataConnect,
    messaging,
  }
}