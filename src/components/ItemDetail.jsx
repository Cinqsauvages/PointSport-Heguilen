import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import ItemCount from "./ItemCount";



const ItemDetail = ({ id, nombre, precio, imagen, descripcion, stock }) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
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
                        
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                        <Link to={'/cart'}><button type="button" class="btn btn-primary btn-lg">Terminar Compra</button></Link> 
                        
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ItemDetail;