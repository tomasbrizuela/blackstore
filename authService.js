import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export async function AuthUser(userData) {
    let { email, password } = userData
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function LoginUser(userData) {
    let { email, password } = userData;
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential)
        return userCredential.user;
    } catch (error) {
        console.log(error)
        return error;
    }
}