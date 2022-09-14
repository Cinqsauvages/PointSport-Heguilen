import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, stock }) => {
    return (
      <div className="card container w-25 hw-100  m-2" id={id}>
             <Link to={`/detalle/${id}`}><img src={imagen} class="card-img-top " alt={nombre} /></Link>
            <div className="card-body" >
                <h5 className="card-title">{nombre}</h5>
                <p className="card-subtitle">Precio:${precio}</p>
                <span>Stock:{stock}</span>
            </div>
        </div>
    )
};

export default Item;