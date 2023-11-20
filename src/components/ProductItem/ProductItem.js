import React from 'react'
import { Link } from 'react-router-dom'
import Stars from '../Stars/Stars'
import './ProductsItem.css'

export default function ProductItem({ id, title, rating }) {

  return (
    <>
      <div className='ProductItem'>
        <Link to={'/product/' + id} className='defaultText' state={id}>
          <h1>{title}</h1>
        </Link>
        <Stars rating={rating} />
      </div>
    </>
  )
}
