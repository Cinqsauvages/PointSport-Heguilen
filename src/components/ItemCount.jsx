import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);
    console.log(itemStock);
    const disminuirCantidad = (valor) => {
        (valor > -1) ? setCantidad(valor) : alert("No tenes cantidad.");
    }
    const aumentarCantidad = (valor) => {
        (valor != 6) ? setCantidad(valor) : alert("No tenemos mas Stock.");
    }
    const agregarProducto = () => {
        //valor es cantidad//
        setItemStock(itemStock - cantidad);
        setItemAdd(cantidad)
    }
    return (
        <div className="container text-center position-relative">
            <div className="row w-25 position-absolute top-0 start-50 translate-middle-x ">
                <button type="button" className="col" onClick={() => {
                    { disminuirCantidad(cantidad - 1) }
                }}>-</button>
                <span className="cantidad col" >Cantidad:{cantidad}</span>
                <button type="button" className="col" onClick={() => {
                    { aumentarCantidad(cantidad + 1) }
                }}>+</button>
                <input type="button" value="Agregar Carrito" className="col" onClick={() => {
                    { agregarProducto(itemAdd) }
                }} />
                <p id="Texto">Cantidad de productos Agregados: {itemAdd}</p>
            </div>
        </div>
    )
}
export default ItemCount;