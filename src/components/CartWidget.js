import carritoIcono from "./img/carrito-de-compras.png"

function CartWidget(){
    return(
        <div className="cartWidget">
            <img className="logoCarrito" src={carritoIcono} height={30} alt="Icono carrito de compras"/>
            <p className="itemCount">3</p>
        </div>
    );
}

export default CartWidget;