import React from 'react'
import products from '../productsContent'
import ProductCards from './ProductCards';
    

const ProductGrid = () => {
    // console.log(products);
    
    return (    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
            products.map( (product, id )=> {
                return <ProductCards key={id} product={product}/>
            } )
        }
    </div>)
}

export default ProductGrid