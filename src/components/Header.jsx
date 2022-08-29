import React from "react";
import CartWidget from "./CartWidget";


let logo = "./logo2.jpg"

const Header = () => {
    return (
        <header className="container-fluid text-bg-dark ">
            <div className="row align-items-center ">
                <div className="logo col ">
                    <img src={logo} className="rounded-circle" alt="logoPointSport" width="140" />
                </div>

                <nav className="lista col-6  text-center">

                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Pantalones</a></li>
                            <li><a className="dropdown-item" href="#">Calzas</a></li>
                            <li><a className="dropdown-item" href="#">Tops</a></li>
                            <li><a className="dropdown-item" href="#">Conjuntos</a></li>
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