import React from 'react';
import products from './product_data.js';
import { useState, useMemo } from 'react';

export default function ProductSearch() {
    const [count, setCount] = useState(0);
    const [query, setQuery] = useState('');

    const filteredProducts = useMemo(() => {
        console.log('Filtering products data...');
        return products.filter(product =>
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    // const filteredProducts = products.filter(product => {
    //     console.log('Filtering products data...');
    //     return product.description.toLowerCase().includes(query.toLowerCase())
    // });
    return (
        <>
            <h3 className="text-center">Product List with Search Functionality</h3>
            <div className="row">
                <div className="col-sm-6">
                    <input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search by category..." className="form-control" />
                    <p>Searched Text: <strong>{query}</strong></p>
                    <p>Products Found: <strong>{filteredProducts.length}</strong></p>
                </div>
                <div className="col-sm-2">
                    <p>Count: {count} &nbsp;
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                    </p>
                </div>
            </div>
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-3 my-2" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.category}</h5>
                                <p className="card-text text-truncate">{product.title}</p>
                                <p className="card-text text-truncate">{product.description}</p>
                                <p className="card-text">Rs {product.price}</p>
                                <p className="card-text">{product.rating.rate} ⭐</p>
                                <a href="#" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
