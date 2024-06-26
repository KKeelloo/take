import {Link} from "react-router-dom";
    
function ProductItem({id, title, brand}){
    return(
        <li key={id}>
            <li><Link to={`details/${id}`}>{title}</Link> ({brand}) </li>
        </li>
    )
};
export default ProductItem;