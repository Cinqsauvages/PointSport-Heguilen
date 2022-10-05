import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getFirestore,getDoc } from "firebase/firestore"
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detail,setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = doc(db, "productos", id);

        getDoc(itemsCollection).then((snapShot) => {
            if (snapShot.exists()){
                setDetail({id:snapShot.id,...snapShot.data() });
                setLoading(false);
            }  
        })
    },[id])
    
    

    return (
        <div className="d-flex justify-content-center">
            {loading ? <Loading /> : <ItemDetail Item={detail} /> }
            
        </div>
    )
}


export default ItemDetailContainer;