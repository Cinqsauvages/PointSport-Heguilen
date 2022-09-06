import React from "react";

const Item = ({ id, nombre, imagen, precio, stock }) => {
    return (
        <div className="card container w-25 hw-100  m-2" id={id}>
            <img src={imagen} class="card-img-top" alt={nombre} />
            <div className="card-body" >
                <h5 className="card-title">{nombre}</h5>
                <p className="card-subtitle">Precio:${precio}</p>
                <span>Stock:{stock}</span>
            </div>
        </div>
    )
};

export default Item;