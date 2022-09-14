import React from "react";

import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    console.log(item[0].nombre)
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={item[0].imagen} className="img-fluid rounded-start w-75" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{item[0].nombre}</h5>
                        <p className="card-text fs-4">Descripcion: {item[0].descripcion}</p>
                        <p className="card-text fs-3">Precio: ${item[0].precio}</p>
                        <ItemCount stock={5} initial={1} onAdd={0} className="row" />
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default ItemDetail;