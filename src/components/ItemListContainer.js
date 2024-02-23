import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "./asyncMocks";

function ItemListContainer(){
    const categoryId = useParams();
    const producto = getProductsByCategory(categoryId);
    return(
        <div>
            <h1>ItemListContainer</h1>
            <article>
                <h2>{producto.nombre}</h2>
                <img src={producto.img} alt={producto.description}/>
                
            </article>
        </div>
    );   
}

export default ItemListContainer;