import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, nombre, precio, imagen, descripcion, stock }) => {
    const [goToCart, setGoToCart] = useState(false);
    const [cantidad, setCantidad] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(0);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    const disminuirCantidad = (valor) => {
        (valor > -1) ? setCantidad(valor) : alert("No tenes cantidad.");
    }
    const aumentarCantidad = (valor) => {
        (valor != 6) ? setCantidad(valor) : alert("No tenemos mas Stock.");
    }
    const agregarProducto = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(onAdd);
        }
        if (itemStock < 1) {
            setCantidad(0);
        } else {
            setCantidad(1);
        }
    }
    return (
        <div className="card m-3 shadow p-3 mb-5 bg-body rounded border border-dark " >
            <div className="row g-0 m-3 ">
                <div className="col-md-3 ">
                    <img src={imagen} className="img-fluid rounded-start w-75" alt="..." />
                </div>
                <div className="col-md-8 m-5">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{nombre}</h5>
                        <p className="card-text fs-4">Descripcion: {descripcion}</p>
                        <p className="card-text fs-3">Precio: ${precio}</p>

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
                                    <Link to={'/cart'}><button type="button" class="btn btn-primary btn-lg">Terminar Compra</button></Link>
                                    <p>Cantidad de productos agregados: {itemAdd}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </div>
    )
}

export default ItemDetail;