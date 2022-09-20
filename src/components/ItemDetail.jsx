import React from "react";
import { useState,useContext } from "react";
import { Link } from 'react-router-dom';
import {CartContext} from "./CartContext";

import ItemCount from "./ItemCount";



const ItemDetail = ({ Item }) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (Item, counter) => {
        setCounter(counter);
        addItem(Item, counter);
    }

    return (
        <div className="card m-3 shadow p-3 mb-5 bg-body rounded border border-dark " >
            <div className="row g-0 m-3 ">
                <div className="col-md-3 ">
                    <img src={Item.imagen} className="img-fluid rounded-start w-75" alt="..." />
                </div>
                <div className="col-md-8 m-5">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{Item.nombre}</h5>
                        <p className="card-text fs-4">Descripcion: {Item.descripcion}</p>
                        <p className="card-text fs-3">Precio: ${Item.precio}</p>
                        
                        <ItemCount stock={Item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={Item}/>
                        <Link to={'/cart'}><button type="button" class="btn btn-primary btn-lg center text-center">Terminar Compra</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;