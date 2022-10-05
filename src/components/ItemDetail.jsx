import { React, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import './ItemDetail.css'



const ItemDetail = ({ Item }) => {
    const { addItem, cart } = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    console.log(cart)
    const onAdd = (Item, counter) => {
        setCounter(counter);
        addItem(Item, counter);
    }

    return (
        <div className="cardDetail m-3 p-3 mb-5" >   
                <div>
                    <img src={Item.imagen} className="img-fluid" alt="..." />
                </div>
                <div>
                    <div className="card-body ">
                        <h5 className="card-title fs-2">{Item.nombre}</h5>
                        <p className="card-text fs-4">Descripcion: {Item.descripcion}</p>
                        <p className="card-text fs-3">Precio: ${Item.precio}</p>
                        <div className="container row w-75">
                            <ItemCount stock={Item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={Item} />
                            <Link to={'/cart'}><button class="btn  fs-6 p-2 col-md-2 carrito">Ir al Carrito</button></Link>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default ItemDetail;