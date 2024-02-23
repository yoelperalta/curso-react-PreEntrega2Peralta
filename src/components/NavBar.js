import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar (){
    return(
        <div className="navbar">
            <Link to="/"><h1>Chimehuin Fly Shop</h1></Link>
            <nav className="menu">
                <Link to="/category/canas" className="menuItem">Cañas</Link>
                <Link to="/category/reels" className="menuItem">Reels</Link>
                <Link to="/category/lineas" className="menuItem">Líneas</Link>
                <Link to="/category/waders" className="menuItem">Waders</Link>
                <Link to="/category/moscas" className="menuItem">Moscas</Link>
            </nav>
            <CartWidget/>
        </div>
    );
}

export default NavBar;