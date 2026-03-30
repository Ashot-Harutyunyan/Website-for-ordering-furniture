import { initializeApp } from "firebase/app"
import { getFirestore, setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export async function getFurniture(lang) {
    if (!lang) throw new Error('Language code is required')
    let snap

    try {
        snap = await getDoc(doc(db, "furniture", lang))
    } catch (err) {
        console.error('Firebase error:', err)
        throw new Error('Failed to load furniture data. Please try again later.')
    }

    if (!snap.exists()) {
        console.warn(`No data found for language: "${lang}"`)
        return []
    }
    const result = snap.data()?.data
    if (!Array.isArray(result)) {
        console.error('[getFurniture] Unexpected data shape:', snap.data())
        return []
    }

    return result
}