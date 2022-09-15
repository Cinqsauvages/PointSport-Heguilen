import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import calza1 from "../public/imagenes/calza1.png"
import conjunto1 from "../public/imagenes/conjunto1.png"
import conjunto2 from "../public/imagenes/conjunto2.png"
import conjunto3 from "../public/imagenes/conjunto3.png"
import top1 from "../public/imagenes/top1.png"


const ItemDetailContainer = () => {
    let productos = [
        {
            id: 1,
            nombre: "Calza Basica",
            precio: 2500,
            stock: 0,
            imagen: calza1,
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "calzas"


        },
        {
            id: 2,
            nombre: "Top",
            precio: 1500,
            stock: 25,
            imagen: top1,
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "tops"

        },
        {
            id: 3,
            nombre: "Conjunto Animal Print",
            precio: 3500,
            stock: 5,
            imagen: conjunto1,
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "conjuntos"

        },
        {
            id: 4,
            nombre: "Conjunto 2",
            precio: 12500,
            stock: 5,
            imagen: conjunto2,
            descripcion: "Calza Basica, calza elastizada de laycra color negro, con detalles, en blanco, comoda e ideal para el deporte. ",
            categoria: "conjuntos"

        },
        {
            id: 5,
            nombre: "Conjunto 3",
            precio: 550,
            stock: 5,
            imagen: conjunto3,
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
            
        })
    },[id])
    
    

    return (
        <div id={detail.id}>
            {detail.map(item => <ItemDetail id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} imagen={item.imagen} descripcion={item.descripcion} />)}
        </div>
    )
}


export default ItemDetailContainer;