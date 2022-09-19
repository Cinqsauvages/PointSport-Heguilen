import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(0);

    const disminuirCantidad = (valor) => {
        (valor > -1) ? setCantidad(valor) : alert("No tenes cantidad.");
    }
    const aumentarCantidad = (valor) => {
        (valor != 6) ? setCantidad(valor) : alert("No tenemos mas Stock.");
    }
    const agregarProducto = () => {
        if(cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(onAdd);
        }
        if (itemStock < 1) {
            setCantidad(0);
        }else {
            setCantidad(1);
        }
    }
    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-md-8 center">
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => { disminuirCantidad(cantidad - 1) }} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => { }} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => { aumentarCantidad(cantidad + 1) }} />
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <button className="btn btn-secondary" type="button" onClick={() => { agregarProducto() }}>Agregar</button>
                    </div>
                    <p>Cantidad de productos agregados: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;