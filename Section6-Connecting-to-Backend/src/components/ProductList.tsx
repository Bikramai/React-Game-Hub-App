import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';

const ProductList = () => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('fetching products');
        setProducts(['Clothing', 'Electronics', 'Books']);
    }, [])
  return (
    <div>ProductList</div>
  )
}

export default ProductList