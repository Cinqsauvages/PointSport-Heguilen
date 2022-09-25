import React from "react";
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
import { useEffect } from "react";


const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total_items = cart.reduce((total, item) => total += item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);
    let display = ""

    if (total === 0){
        display = "d-none"
    }
    
    return (
        <div className={display} >
            <a href="#modal"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="48"
                height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round"
                stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" /></svg>
            </a>
            <span className=" badge rounded-pill bg-danger">{total}</span>
        </div>
    )
};
export default CartWidget;