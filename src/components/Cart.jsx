import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
    const { cart, deleteOne, clear } = useContext(CartContext);
    let arrayPrecios = [];
    cart.map((prod) => (
       arrayPrecios.push(prod.precio * prod.cantidad)
    
    ))
    let total = arrayPrecios.reduce((a,b)=> a + b,0);
    
   
    return <>
        {cart.map((prod) => (
            <div key={prod.id} className="list-group list-group m-5 d-flex align-items-center " >
                <li className="list-group-item d-flex justify-content-evenly w-50 ">
                    <div className="ms-2 me-auto">
                        <div><img className="w-25 h-25" src={prod.imagen} alt={prod.nombre} /></div>
                        <div className="fw-bold fs-4">{prod.nombre}</div>
                        Precio: ${prod.precio * prod.cantidad}
                    </div>
                    <div>
                        <span className="badge bg-dark rounded-pill m-3">{prod.cantidad}</span>
                        <button className="badge bg-dark rounded-pill fs-6" onClick={() => { deleteOne(prod.id) }}>Eliminar</button>
                    </div>
                </li>

            </div>
        ))}
        <div className="list-group list-group m-5 d-flex align-items-center  " ><p className="fw-bold fs-4 text-light">Precio total : ${total} </p></div>
        <button className="badge bg-dark rounded-pill fs-6 p-2 position-relative start-50 translate-middle " onClick={() => { clear() }}>Vaciar Carrito</button>
    </>
}

export default Cart;