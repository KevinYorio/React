const products = [
    { id: "1", name: "Currys 1", description: "Zapatillas Curry 1", stock: 4, image: `/Curry1.jpeg`},
    { id: "2", name: "Currys 2", description: "Zapatillas Curry 2", stock: 8, image: `/Curry2.jpeg`},
    { id: "3", name: "Currys 3", description: "Zapatillas Curry 3", stock: 10, image: `/Curry3.jpeg`},
    { id: "4", name: "Currys 4", description: "Zapatillas Curry 4", stock: 10, image: `/Curry4.jpeg`},
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  }; 