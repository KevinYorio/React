import { useEffect, useState } from "react"
import { getProducts } from "../../productMock"
import { Card } from '../Card/Card';

export const Maps = () => {

    const [products, setProducts] = useState([])
    const [isloading, setisloading] = useState(true)

    useEffect( () => {
            getProducts()
                .then( resp => {{
                    console.log(resp)
                    setProducts(resp);
                    setisloading(!isloading)
                }} )
                .catch( error => console.log(error))
    }, [])

    return (
    <div>
        <h1>Mostrar productos con un map</h1>
        {
            isloading ? <h3>Cargando productos...</h3> : 
            products.map( product => <Card key={product.id} name={product.name} description={product.description} stock={product.stock} />
        )
        }
    </div>
    )
}
