import { useState } from 'react';
import "./pagination.css";
import products from './product_data.js';
import ReactPaginateModule from 'react-paginate'
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;


export default function Products() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const filteredProducts = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const hanldePaste = (event) => {
        event.preventDefault(); // disable the paste functionality
        alert('Paste is not allowed here...')
    }

    return <>
        <h3 id="test3">Products With Pagination</h3>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <input type="search" placeholder='Search...' className='form-control'
                        onPaste={hanldePaste} />
                </div>
            </div>
            <div className="row mt-3">
                {filteredProducts.map((product) => {
                    return <div className="col-sm-3" key={product.id}>
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
            <div className="row mt-3">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    activeClassName="selected"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    pageClassName="page-item"
                    breakClassName="page-item"
                />
            </div>
        </div>
    </>
}
