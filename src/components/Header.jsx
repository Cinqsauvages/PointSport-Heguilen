import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../imagenes/logo2.jpg";


const Header = () => {
    return (
        <header className="container-fluid text-bg-dark ">
            <div className="row align-items-center ">
                <div className="logo col ">
                    <Link to={"/"}><img src={logo} className="rounded-circle" alt="logoPointSport" width="140" /></Link>
                </div>

                <nav className="lista col-6  text-center">
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="asd" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item"  to={"categoria/calzas"}>Calzas</Link></li>
                            <li><Link className="dropdown-item" to={"categoria/tops"}>Tops</Link></li>
                            <li><Link className="dropdown-item" to={"categoria/conjuntos"}>Conjuntos</Link></li>
                        </ul>
                        <ul className="row navbar">
                            <li className="col list-unstyled"><a href="ASD" className="text-decoration-none text-white">Contacto</a></li>
                            <li className="col list-unstyled" ><a href="ASD" className="text-decoration-none text-white">Ubicacion </a></li>
                        </ul>
                    </div>
                </nav>

                <div className="col  text-center">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}
export default Header;