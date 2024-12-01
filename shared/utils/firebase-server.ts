import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect'
import { connectorConfig } from 'one-person-empire'

export function useFirebaseServer(authIdToken?: string) {
  const config = useRuntimeConfig()
  const isDev = process.env.NODE_ENV === 'development'
  
  const firebaseApp = initializeApp(config.firebase, {
    authIdToken: authIdToken
  })
  
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  let dataConnect = getDataConnect(firebaseApp, connectorConfig)

  if (isDev) {
    // Connect to emulators in development
    connectFirestoreEmulator(firestore, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
    
    if (dataConnect && !dataConnect.isEmulator) {
      connectDataConnectEmulator(dataConnect, 'localhost', 9399)
    }
  }

  return {
    firebaseApp,
    firestore,
    auth,
    dataConnect
  }
} 