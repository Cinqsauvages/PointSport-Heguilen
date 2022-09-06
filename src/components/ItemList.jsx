import React from "react";
import Item from "./Item";



const ItemList = ({ items }) => {
    
    return (
        <div className="row m-3 d-flex">
            {items.map(item => <Item id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} imagen={item.imagen} />)}

        </div>
    )

}

export default ItemList;