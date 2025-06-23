import React from 'react'
import { Link } from 'react-router-dom'

const ProductCards = ({ product }) => {
  return (
    <Link>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={product.img} alt="" />
        <div className=''></div>
      </div>
    </Link>
  )
}

export default ProductCards