import React from "react"
import { useEffect } from "react";
import { useState } from "react";

import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //use efect sirve para ejecutar//
    let productos = [
        {
            id: 1,
            nombre: "Calza Basica",
            precio: 2500,
            stock: 0,
            imagen: "./calza1.jpg",
            descripcion : "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. "

        },
        {
            id: 2,
            nombre: "Top",
            precio: 1500,
            stock: 25,
            imagen: "./top1.jpg"

        },
        {
            id: 3,
            nombre: "Conjunto Animal Print",
            precio: 3500,
            stock: 5,
            imagen: "./conjunto1.jpg"

        },
        {
            id: 4,
            nombre: "Conjunto 2",
            precio: 12500,
            stock: 5,
            imagen: "./conjunto2.jpg"

        },
        {
            id: 5,
            nombre: "Conjunto 3",
            precio: 550,
            stock: 5,
            imagen: "./conjunto3.jpg"
        }
    ]
    useEffect(() => {   
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },2000)
        });
        //capturo la respuesta y la mando a items//
        promesa.then((respuesta) => {
            setItems(respuesta);
        })
        
    }, []);

    let detail = (productos.find(id => id.id === 1))


    return (
        <main className="container mx-auto mt-3 ">
            <div className="text-center bg-dark rounded-3  ">
                <h3 className="text-light">Productos</h3>
                <ItemList items={items} />
            </div>
            <ItemDetailContainer  detail = {detail}/>
            
        </main>
    )

}

export default ItemListContainer;