
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import calza1 from "../imagenes/calza1.png"
import conjunto1 from "../imagenes/conjunto1.png"
import conjunto2 from "../imagenes/conjunto2.png"
import conjunto3 from '../imagenes/conjunto3.png';
import top1 from "../imagenes/top1.png"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //captura el valor de el link
    const { tipo } = useParams();
    //use effect sirve para ejecutar//
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

   
    useEffect(() => {
        let categoria = "";
        if (tipo === "tops") {
            categoria = "tops";
        } else if (tipo === "conjuntos") {
            categoria = "conjuntos"
        } else if (tipo === "calzas") {
            categoria = "calzas"
        }else{
            categoria = "nada"
        }
       
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
        //capturo la respuesta y la mando a items//
        promesa.then((respuesta) => {
            if (categoria !== "nada") {
                const array = respuesta.filter(producto => producto.categoria === categoria);
                setItems(array);
                console.log(array)

            } else if (categoria === "nada"){
                setItems(respuesta)
            }
        }) 
        
    }, [tipo]);

    return (
        <main className="container mx-auto mt-3 ">
            <div className="text-center bg-dark rounded-3  ">
                <h3 className="text-light">Productos</h3>
                <ItemList items={items} />
            </div>
        </main>
    )

}

export default ItemListContainer;