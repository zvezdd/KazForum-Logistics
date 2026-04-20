import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: (import.meta.env.VITE_FIREBASE_API_KEY as string | undefined) || 'AIzaSyCmF1HKKaG9xFhVhRUP6pHIg__641Z3vdI',
  authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined) || 'venture-ai-ibra-1337.firebaseapp.com',
  projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined) || 'venture-ai-ibra-1337',
  storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined) || 'venture-ai-ibra-1337.firebasestorage.app',
  messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined) || '1060108308386',
  appId: (import.meta.env.VITE_FIREBASE_APP_ID as string | undefined) || '1:1060108308386:web:31ee4eef4455f5394aacfb',
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

function getDb(app: ReturnType<typeof getApp>): Firestore {
  try {
    return initializeFirestore(app, {
      experimentalAutoDetectLongPolling: true,
    })
  } catch {
    return getFirestore(app)
  }
}

export const db: Firestore | null = firebaseReady
  ? getDb(getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
  : null
