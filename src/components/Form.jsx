import { addDoc, collection, serverTimestamp, getFirestore } from "firebase/firestore";
import { React, useContext,useState } from "react";
import { CartContext } from "./CartContext";

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState();
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('');
    const { totalPrecio, cart } = useContext(CartContext);
    const total = totalPrecio();


    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: { nombre, telefono, direccion, email },
            cart,
            date: serverTimestamp(),
            total
        };

        const db = getFirestore();
        const refOrden = collection(db, 'orders')
        addDoc(refOrden, orden)
            .then((res) => {
                console.log(res);
                setOrderId(res.id);
            })
    };

    const handleDireccion = (e) => {
        setDireccion(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    if (orderId) {
        return(
            <h1 className="text-light">
                Gracias por tu compra, el codigo de seguimiento es : {orderId}
            </h1>
        )
    }
    return (
        <div className="list-group list-group m-5 d-flex align-items-center">
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label  text-light">Nombre y Apellido</label>
                <input type="nombre" className="form-control" placeholder="Toto Perez" onChange={handleNombre} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-light">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" onChange={handleEmail} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-light">Direccion</label>
                <input type="text" className="form-control" placeholder="Av Siempre Viva 126" onChange={handleDireccion} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-light">Telefono</label>
                <input type="number" className="form-control" placeholder="01124325522" onChange={handleTelefono} />
            </div>
            <button className="badge bg-dark rounded-pill fs-6 p-2 " onClick={handleSubmit} >Enviar</button>

        </div>
    )
};


export default Form;