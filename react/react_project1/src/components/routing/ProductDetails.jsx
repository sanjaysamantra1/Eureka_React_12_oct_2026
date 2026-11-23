import { useSearchParams } from 'react-router';

export default function ProductDetails() {
    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    return <>
        <h2>Product Details</h2>
        <p>Id : {id}</p>
        <p>Title : {title}</p>
        <p>Price : {price}</p>
    </>
}
