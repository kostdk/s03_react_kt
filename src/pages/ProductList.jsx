import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchShop = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/`);
            const data = await response.json();
            setProducts(data);
        };
        fetchShop();
    }, []);

    return (
        <div className="product">
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <Link to={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default ProductList;