import productArr from './product_data.js';

export default function ProductList() {
    return <>
        <h3>Product List</h3>
        <div className="container">
            <div className="row gap-1">
                {productArr.map((product) => {
                    return <div className="col-sm-3">
                        <div class="card">
                            <img src={product.image} class="card-img-top" alt="..." style={{height:"200px"}} />
                            <div class="card-body">
                                <h5 class="card-title">{product.category}</h5>
                                <p class="card-text text-truncate">{product.title}</p>
                                <p class="card-text text-truncate">{product.description}</p>
                                <p class="card-text">{product.price}</p>
                                <p class="card-text">{product.rating.rate}</p>
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
