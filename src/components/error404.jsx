import React from "react";
import { Link } from "react-router-dom"
import Logo from "../imagenes/logo.jpg";

const Error404 = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1 className="text-light">Error 404</h1>
                <p><Link to={"/"}><img src={Logo}  className= "rounded-cirlce" alt="PointSport" width="180" /></Link></p>
                <h3 className="text-light">La página que estás buscando no existe!</h3>
            </div>
        </div>
    )
}

export default Error404;