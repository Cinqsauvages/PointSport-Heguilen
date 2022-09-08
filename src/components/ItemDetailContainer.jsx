import React from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ detail }) => {
    // devuelvo 1 solo producto//
        const [itemDetail, setItems] =useState([]);
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(detail)
                console.log(detail);
            },2000)
    
        });
        promesa.then((item) =>{
            setItems(item);
            
        })

    return (
        <div>
            <ItemDetail item = {itemDetail}/>
        </div>
    )
}


export default ItemDetailContainer;