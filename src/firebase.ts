import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
}

function configIsComplete(
  c: typeof firebaseConfig,
): c is {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
} {
  return Object.values(c).every((v) => typeof v === 'string' && v.trim().length > 0)
}

export const firebaseReady = configIsComplete(firebaseConfig)

export const db: Firestore | null = firebaseReady
  ? getFirestore(getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
  : null
