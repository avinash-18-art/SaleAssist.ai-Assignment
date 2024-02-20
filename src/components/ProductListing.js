import React from 'react'
import ProductCard from './ProductCard'

function ProductListing({products}) {
  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
