import React from "react"
import ItemCount from "./ItemCount";



const ItemListContainer = (props) => {
    return (
        <main className="container mx-auto mt-3 ">
            <div className="card text-center bg-dark text-light">
                <h3>Productos</h3>
                <ul className="list-group border-light ">
                    <li className="list-group-item bg-dark text-light list-unstyled">{props.valor}</li>
                </ul>
            </div>
            <ItemCount sotck={5} initial={1} onAdd={0}/>
        </main>
    )

}

export default ItemListContainer;