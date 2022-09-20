import React from "react";
import { useState,useContext } from "react";
import {CartContext} from "./CartContext";

const ItemCount = ( props ) => {
    const {item} = props;
    const {cart, setCart, addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(props.initial);
    const [itemStock, setItemStock] = useState(5);

    const disminuirCantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }
    }

    const aumentarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            addItem(item, counter);
            setItemStock(itemStock - counter);
        }   
    }
    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-md-8 center">
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => { disminuirCantidad(counter - 1) }} />
                        <input type="text" className="form-control" value={counter} onChange={() => { }} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => { aumentarCantidad(counter + 1) }} />
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <button className="btn btn-secondary" type="button" onClick={() => { agregarProductos() }}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;