import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    let productos = [
        {
            id: 1,
            nombre: "Calza Basica",
            precio: 2500,
            stock: 0,
            imagen: "./calza1.jpg",
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "calzas"


        },
        {
            id: 2,
            nombre: "Top",
            precio: 1500,
            stock: 25,
            imagen: "./top1.jpg",
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "tops"

        },
        {
            id: 3,
            nombre: "Conjunto Animal Print",
            precio: 3500,
            stock: 5,
            imagen: "./conjunto1.jpg",
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "conjuntos"

        },
        {
            id: 4,
            nombre: "Conjunto 2",
            precio: 12500,
            stock: 5,
            imagen: "./conjunto2.jpg",
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "conjuntos"

        },
        {
            id: 5,
            nombre: "Conjunto 3",
            precio: 550,
            stock: 5,
            imagen: "./conjunto3.jpg",
            descripcion:"Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "conjuntos"
        }
    ]

    let [detail,setDetail] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const itemId = new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(productos);
                console.log(productos)
            },2000)
        });
        
        itemId.then((productos) =>{
            setDetail(productos.filter(producto => producto.id === parseInt(id)));
            console.log(productos.filter(producto => producto.id === parseInt(id)))
        })
    },[id])
    
    

    return (
        <div id={detail.id}>
            <ItemDetail item={detail} />
        </div>
    )
}


export default ItemDetailContainer;