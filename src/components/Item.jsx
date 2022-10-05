import React from "react";
import { Link } from "react-router-dom";
import './Item.css'


const Item = ({ id, nombre, imagen, precio, stock }) => {
   

    return (
      <div className="card m-2 efecto" id={id}>
             <Link to={`/detalle/${id}`}> <img src={imagen} class="card-img-top img-fluid" alt={nombre} /></Link>
            <div className="card-body mt-2 detalles " >
                <h5 className="card-title  fw-bold">{nombre}</h5>
                <p className="card-subtitle fw-semibold">Precio:${precio}</p>
                <span className="fw-semibold">Stock:{stock}</span>
            </div>
        </div>
    )
};

export default Item;