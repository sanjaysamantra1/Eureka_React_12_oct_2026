import { useState } from 'react';
import products from './product_data.js';
import SearchBarModule from 'react-js-search';
const SearchBar = SearchBarModule.default || SearchBarModule;

export default function ProductList() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const onSearchClick = (searchText) => {
        const filteredItems = products.filter((product) => JSON.stringify(product).includes(searchText))
        setFilteredProducts(filteredItems);
    };
    const onSearchTextChange = (searchText) => {
        const filteredItems = products.filter((product) => JSON.stringify(product).includes(searchText))
        setFilteredProducts(filteredItems);
    };
    const sortAsc = () => {
        const sortedItems = products.sort((p1, p2) => p1.price - p2.price)
        setFilteredProducts([...sortedItems]);
    }
    const sortDesc = () => {
        const sortedItems = products.sort((p1, p2) => p2.price - p1.price)
        setFilteredProducts([...sortedItems]);
    }
    return <>
        <h3>Product List</h3>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <SearchBar
                        onSearchTextChange={onSearchTextChange}
                        onSearchButtonClick={onSearchClick}
                        placeHolderText={"Search here..."}
                        data={products}
                    />
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary" onClick={sortAsc}>Sort Asc</button>
                    <button className="btn btn-secondary mx-1 " onClick={sortDesc}>Sort Desc</button>
                </div>
            </div>
            <div className="row mt-3">
                {filteredProducts.map((product) => {
                    return <div className="col-sm-3">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.category}</h5>
                                <p className="card-text text-truncate">{product.title}</p>
                                <p className="card-text text-truncate">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                                <p className="card-text">{product.rating.rate}</p>
                                <a href="#" className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
