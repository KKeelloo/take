import {useParams, Link} from "react-router-dom";

export default function ProductDetails({products}){
    const {id} = useParams();
    if (products == null || products == undefined){
        return null
    }
    const productFiltered = products.filter(product => product.id == id);
    if(productFiltered.length == 0){
        return null;
    }
    const product = productFiltered[0];
    return(
        <div className="ProductDetails">
            <h1>
                {product.name}
            </h1>
            {product.category} <br/> {product.brand} <br/> {product.description} <br/> {product.price} <br/>
            <img src={product.thumbnail} alt="Image"/>
            <Link to="/">Back to list</Link>
        </div>
    );
}