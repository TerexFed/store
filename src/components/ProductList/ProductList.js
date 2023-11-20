import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    console.log(products)

    return (
        <div className='ProductList'>
            {products.map(el =>
                    <ProductItem key={el.id} id={el.id} title={el.title} rating={el.rating.rate} />
            )}
        </div>
    )
}
