import React, { useState, createContext} from "react";

export const CartContext = createContext();


const Provider = ({children}) =>{
    const [cart,setCart] = useState([]);
  
    const addItem = (item,cantidad) =>{
        const producto = {...item,cantidad};
        if(isInCart(producto.id)) {
           sumarCantidad(producto)
        }else{
            setCart([...cart,producto]);
        }
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        //devuelve true or false//
        return cart.some(item=> item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total,item) => total += item.cantidad, 0);
    }
 
    const sumarCantidad = (producto) =>{
        const cartUpdated = cart.map((itemCart)=>{
            if(producto.id === itemCart.id){
                const productoUpdated = {
                    ...itemCart,
                    cantidad: itemCart.cantidad + producto.cantidad
                }
                return productoUpdated;
            }else{
                return itemCart;
            } 
        })
        //seteo producto con los prod actualizados.
        setCart(cartUpdated);
    }

    const deleteOne = (id) =>{
        const productFilter = cart.filter((prod)=> prod.id !== id);
        setCart(productFilter);
    };
   
    const totalPrecio = () => {
        const copia =[...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad * producto.precio
            
        })
        return count
    }

    return(
        <CartContext.Provider value = {{cart, addItem, clear, isInCart, cartTotal, deleteOne, totalPrecio}}>
            {children}
        </CartContext.Provider>
    )
}
export default Provider;