import React from "react"



const ItemListContainer = (props) => {
    return (
        <main className="container mx-auto mt-3 ">
            <div className="card text-center bg-dark text-light">
                <h3>Productos</h3>
                <ul className="list-group border-light ">
                    <li className="list-group-item bg-dark text-light list-unstyled">{props.valor}</li>
                </ul>
            </div>
        </main>
    )

}

export default ItemListContainer;