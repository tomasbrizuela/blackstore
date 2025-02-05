import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default async function AuthUser(userData) {
    console.log(userData)
    let { email, password } = userData
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.log(error)
        throw error
    }
}