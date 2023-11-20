import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductInfo.css'
import Stars from '../Stars/Stars'

export default function ProductInfo() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(data => {
                console.log('Response data:', data);
                setProduct(data);
            })
    }, [id])


    return (
        <div className="ProductInfo">
            <h1>{product.title}</h1>
            <img src={product.image} alt='ProductImage' />
            <h2>Price: {product.price}</h2>
            <Stars rating={product.rating?.rate} />
            <h3>{product.description}</h3>
            <button onClick={() => navigate(-1)}>Back</button>
        </div >
    )
}
