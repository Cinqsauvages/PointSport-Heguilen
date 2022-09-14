import React from "react";

import ItemCount from "./ItemCount";


const ItemDetail = ({ id, nombre, precio, imagen, descripcion }) => {
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
                        <ItemCount stock={5} initial={1} onAdd={0} className="row overflow-auto" />
                    </div>
                </div>
               
            </div>
            

        </div>
    )
}

export default ItemDetail;