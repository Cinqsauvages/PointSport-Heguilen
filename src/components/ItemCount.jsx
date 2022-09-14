import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const disminuirCantidad = (valor) => {
        (valor > -1) ? setCantidad(valor) : alert("No tenes cantidad.");
    }
    const aumentarCantidad = (valor) => {
        (valor != 6) ? setCantidad(valor) : alert("No tenemos mas Stock.");
    }
    const agregarProducto = () => {
        console.log(cantidad)
        console.log(itemStock);
        if (cantidad <= itemStock){
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }
    return (
        <div className=" text-center w-50  ">
            <div className="row  position-absolute  start-50 translate-middle-x">
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