import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, deleteOne, clear, totalPrecio } = useContext(CartContext);
    let total = totalPrecio();
    return <>
        {cart.map((prod) => (
            <div key={prod.id} className="contenidoCarrito " >
                <li className=" listaCarro ">
                    <div className="ms-2 me-auto">
                        <div><img className="w-25 h-25" src={prod.imagen} alt={prod.nombre} /></div>
                        <div className="fw-bold fs-4">{prod.nombre}</div>
                        <p>Precio por Cantidad: ${prod.precio * prod.cantidad}</p>
                    </div>
                    <div className="d-flex">
                        <span className="badge bg-dark rounded-pill m-3">{prod.cantidad}</span>
                        <button className="badge bg-dark rounded-pill fs-6 btn" onClick={() => { deleteOne(prod.id) }}>Eliminar</button>
                    </div>
                </li>

            </div>
        ))}
        <div className=" m-5 d-flex justify-content-center" >
            <p className="fw-bold fs-4 text-light">Precio total : ${total} </p>
        </div>
        <div className="finalCarrito">
            <button className="badge bg-dark rounded-pill fs-6 p-2 btn" onClick={() => { clear() }}>Vaciar Carrito</button>
            <Link to="/checkout" className="badge bg-dark rounded-pill fs-6 p-2 btn "> Terminar Compra </Link>
        </div>
    </>
}

export default Cart;