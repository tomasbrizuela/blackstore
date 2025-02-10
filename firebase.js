import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, addDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjHZA1wNK-cWG0GSGAWuGWCcuhyWuXDG8",
    authDomain: "blackstore-d8717.firebaseapp.com",
    projectId: "blackstore-d8717",
    storageBucket: "blackstore-d8717.firebasestorage.app",
    messagingSenderId: "699820369086",
    appId: "1:699820369086:web:18b87b243d582494d6eaef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export async function getItems() {
    let response = await getDocs(collection(db, "products"))
    let data = response.docs.map((item) => ({
        'id': item.id,
        ...item.data()
    }))
    return data;
}

export async function filterItems(category) {
    let q = query(
        collection(db, "products"),
        where("categoria", "array-contains", category)
    )
    let response = await getDocs(q)
    let productArr = response.docs.map((item) => ({
        'id': item.id,
        ...item.data()
    }))
    console.log(productArr)
    return productArr;
}

export async function getCategoriesOfItems() {
    let arr = await getItems();
    for (const item of arr) {
        console.log(item.categoria)
    }
}

export async function addToCart(item) {
    try {
        let status = await addDoc(collection(db, "cart"), item)
        console.log(status)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

async function getAll() {
    let q = query(
        collection(db, "products"),
        // where("id", "==", 2)
    )
    let data = await getDocs(q)
    let productos = data.docs.map(async (item) => {
        if ((data.docs.filter(pro => pro.id == item.id)).length > 1) {
            await deleteDoc(doc(db, "products", item.id))
        }
        return item.data();
    })
}