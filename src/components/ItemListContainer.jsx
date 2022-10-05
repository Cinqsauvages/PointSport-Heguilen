import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //captura el valor de el link
    const { tipo } = useParams();
    const [loading, setLoading] = useState(true);
    //use effect sirve para ejecutar//
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const queryItems = tipo ? query(itemsCollection, where("categoria", "==", tipo)) : itemsCollection;

        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        })
    }, [tipo]);

    return (
        <main className="container mx-auto mt-3">
            <div className="text-center bg-dark rounded-3 border border-light border-2  ">
                {loading ? <Loading /> : <ItemList items={items} />}
            </div>
        </main>
    )

}

export default ItemListContainer;