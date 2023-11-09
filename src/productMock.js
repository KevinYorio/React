const products = [
    { id: "1", name: "camisa", description: "Una camisa", stock: 4 },
    { id: "2", name: "Corbata", description: "Una Corbata", stock: 8 },
    { id: "3", name: "Pantalon", description: "Un Pantalon", stock: 10 },
    { id: "4", name: "Zapatilla", description: "Una Zapatilla", stock: 10 },
];

export const getProducts = () => {

    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            setTimeout( () => {
                resolve(products)

            }, 3000)
            resolve(products)
        } else {
            reject ("No hay productos")
        }
    })
}