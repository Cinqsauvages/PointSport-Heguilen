import React from "react";
import Logo from "../imagenes/logo.jpg";

const Loading = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5 ">
                <p><img src={Logo} alt="PointSport" className="rounded-circle" width="180" /></p>
                <h3 className="text-light">Cargando...</h3>
            </div>
        </div>
    )
}

export default Loading;