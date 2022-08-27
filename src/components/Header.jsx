import React from "react";
import CartWidget from "./CartWidget";


let logo = "./logo2.jpg"

const Header = () => {
    return (
        <header className="container-fluid text-bg-dark ">
            <div className="row align-items-center ">
                <div className="logo col ">
                    <img src={logo} className="rounded-circle" alt="logoPointSport" width="140"  />
                </div>
                
                <nav className="lista col-6  text-center">
                    <ul className="row navbar">
                        <li className="col list-unstyled" > <a href="ASD" className="text-decoration-none text-white">Inicio</a></li>
                        <li className="col list-unstyled"><a href="ASD" className="text-decoration-none text-white">Contacto</a></li>
                        <li className="col list-unstyled"></li>
                        <li className="col list-unstyled" ><a href="ASD" className="text-decoration-none text-white">Ubicacion </a></li>
                    </ul>
                </nav>

                <div className="col  text-center">
                   <CartWidget />
                </div>
            </div>
        </header>
    )
}
export default Header;