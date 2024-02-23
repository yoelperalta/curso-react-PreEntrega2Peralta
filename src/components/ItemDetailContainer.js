import { Link, useParams } from "react-router-dom";
import { getProductsById } from "./asyncMocks";

function ItemDetailContainer(){
    const productId = useParams();
    const producto = getProductsById(productId);
    return(
        <div>
            <h1>ItemDetailContainer</h1>
            <article>
                <h2>{producto.nombre}</h2>
                <img src={producto.img} alt={producto.description}/>
                
            </article>
        </div>
    );   
}

export default ItemDetailContainer;