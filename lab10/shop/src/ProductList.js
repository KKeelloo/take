import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

function ProductList({products}){
    const [filter, setFilter] = useState('');

    return(
        <div className="ProductList">
            <h1>
                List of products
            </h1>
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {products
                    .filter(product => 
                        product.title.includes(filter))
                    .map((product) =>
                        ProductItem(product)
                )}
            </ul>
        </div>);
}

export default ProductList;