import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const productsStore = [
    {
        "id": 1,
        "titulo": "Cuaderno Minimalista Blanco",
        "descripcion": "Un cuaderno elegante y sencillo con cubierta blanca mate y esquinas redondeadas.",
        "precio": 15.99,
        "tamanio": "A5",
        "paginas": 120,
        "tipoDeHoja": "Rayadas",
        "materialCubierta": "Cartón reciclado",
        "coloresDisponibles": ["Blanco"],
        "extras": ["Cinta marcadora", "Elástico de cierre"],
        "disponible": true,
        "categoria": ["Minimalista", "Blanco", "Sostenible"]
    },
    {
        "id": 2,
        "titulo": "Cuaderno Minimalista Negro",
        "descripcion": "Cuaderno sofisticado con tapa negra mate y papel de alta calidad.",
        "precio": 17.49,
        "tamanio": "A5",
        "paginas": 150,
        "tipoDeHoja": "Cuadriculadas",
        "materialCubierta": "Piel sintética",
        "coloresDisponibles": ["Negro"],
        "extras": ["Bolsillo interior", "Cinta marcadora"],
        "disponible": true,
        "categoria": ["Profesional", "Cuadriculadas", "Sostenible"]
    },
    {
        "id": 3,
        "titulo": "Cuaderno Minimalista Gris",
        "descripcion": "Diseño neutral con cubierta gris suave y páginas punteadas perfectas para bocetos.",
        "precio": 16.99,
        "tamanio": "A6",
        "paginas": 80,
        "tipoDeHoja": "Punteadas",
        "materialCubierta": "Tela",
        "coloresDisponibles": ["Gris", "Beige"],
        "extras": ["Portabolígrafos", "Bolsillo interior"],
        "disponible": true,
        "categoria": ["Blanco", "Cuadriculadas", "Sostenible"]
    },
    {
        "id": 4,
        "titulo": "Cuaderno Minimalista Beige",
        "descripcion": "Ideal para amantes del diseño clásico con una cubierta beige y páginas en blanco.",
        "precio": 14.99,
        "tamanio": "A4",
        "paginas": 100,
        "tipoDeHoja": "Blancas",
        "materialCubierta": "Cartón grueso",
        "coloresDisponibles": ["Beige"],
        "extras": ["Cinta marcadora", "Elástico de cierre"],
        "disponible": false,
        "categoria": ["Clásico", "Blanco", "Sostenible"]
    },
    {
        "id": 5,
        "titulo": "Cuaderno Minimalista Color Menta",
        "descripcion": "Moderno y vibrante con tapa color menta y hojas perfectas para bullet journal.",
        "precio": 18.50,
        "tamanio": "B5",
        "paginas": 140,
        "tipoDeHoja": "Punteadas",
        "materialCubierta": "Plástico reciclado",
        "coloresDisponibles": ["Menta", "Blanco"],
        "extras": ["Bolsillo trasero", "Cinta marcadora doble"],
        "disponible": true,
        "categoria": ["Clásico", "Punteadas", "Bullet Journal"]
    },
    {
        "id": 6,
        "titulo": "Cuaderno Minimalista Rosa Pastel",
        "descripcion": "Un cuaderno delicado con una suave cubierta en color rosa pastel.",
        "precio": 16.49,
        "tamanio": "A5",
        "paginas": 90,
        "tipoDeHoja": "Blancas",
        "materialCubierta": "Cartón laminado",
        "coloresDisponibles": ["Rosa Pastel"],
        "extras": ["Elástico de cierre", "Cinta marcadora"],
        "disponible": true,
        "categoria": ["Femenino", "Blanco", "Elegante"]
    },
    {
        "id": 7,
        "titulo": "Cuaderno Minimalista Verde Oliva",
        "descripcion": "Perfecto para amantes de la naturaleza, con tapa verde oliva y hojas rayadas.",
        "precio": 19.99,
        "tamanio": "A5",
        "paginas": 200,
        "tipoDeHoja": "Rayadas",
        "materialCubierta": "Cuero vegano",
        "coloresDisponibles": ["Verde Oliva"],
        "extras": ["Bolsillo interno", "Portabolígrafos"],
        "disponible": true,
        "categoria": ["Natural", "Rayadas", "Duradero"]
    },
    {
        "id": 8,
        "titulo": "Cuaderno Minimalista Amarillo",
        "descripcion": "Vibrante y alegre, con una cubierta amarilla y esquinas reforzadas.",
        "precio": 14.99,
        "tamanio": "A6",
        "paginas": 100,
        "tipoDeHoja": "Punteadas",
        "materialCubierta": "Plástico reciclado",
        "coloresDisponibles": ["Amarillo"],
        "extras": ["Cinta marcadora", "Portabolígrafos"],
        "disponible": true,
        "categoria": ["Vibrante", "Punteadas", "Compacto"]
    },
    {
        "id": 9,
        "titulo": "Cuaderno Minimalista Azul Marino",
        "descripcion": "Un diseño sobrio con una tapa azul marino y detalles dorados.",
        "precio": 20.99,
        "tamanio": "B5",
        "paginas": 120,
        "tipoDeHoja": "Cuadriculadas",
        "materialCubierta": "Tela de lino",
        "coloresDisponibles": ["Azul Marino"],
        "extras": ["Cinta marcadora", "Elástico de cierre"],
        "disponible": false,
        "categoria": ["Formal", "Cuadriculadas", "Premium"]
    },
    {
        "id": 10,
        "titulo": "Cuaderno Minimalista Color Terracota",
        "descripcion": "Estilo rústico con una cubierta color terracota y hojas punteadas.",
        "precio": 18.00,
        "tamanio": "A4",
        "paginas": 150,
        "tipoDeHoja": "Punteadas",
        "materialCubierta": "Cartón reciclado",
        "coloresDisponibles": ["Terracota"],
        "extras": ["Bolsillo interior", "Portabolígrafos"],
        "disponible": true,
        "categoria": ["Rústico", "Punteadas", "Sostenible"]
    }
];



async function addProductsToDb(product) {
    try {
        const docAdded = await addDoc(collection(db, "products"), product)
        console.log("Item agregado: " + docAdded.title)
    } catch (error) {
        console.log(error)
    }
}

function addItems() {
    productsStore.forEach(async (item) => {
        await addProductsToDb(item);
    })
}

addItems()