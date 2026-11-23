import { useState } from 'react';
import products from './product_data.js';
import SearchBarModule from 'react-js-search';
import { createSearchParams, useNavigate } from 'react-router';
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

    const navigate = useNavigate();
    const navigateHandler = (id, title, price) => {
        navigate({
            pathname: "/productdetails",
            search: `?${createSearchParams({ id, title, price })}`,
        });
    };
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
                    const { id, title, image, price, category, description, rating } = product;
                    return <div className="col-sm-3" key={id}>
                        <div className="card">
                            <img src={image} className="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                <p className="card-text text-truncate">{title}</p>
                                <p className="card-text text-truncate">{description}</p>
                                <p className="card-text">{price}</p>
                                <p className="card-text">{rating.rate}</p>
                                <button className="btn btn-secondary" onClick={() => {
                                    navigateHandler(id, title, price);
                                }}>details</button>

                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
