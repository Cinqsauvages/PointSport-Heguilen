import React from "react";

let logo = "./logo2.jpg"

const NavBar = () => {
    return (
        <div className="container-fluid text-bg-dark ">
            <div className="row align-items-center ">
                <div className="logo col ">
                    <img src={logo} alt="logoPointSport" width="140"  />
                </div>

                <div className="lista col-6  text-center">
                    <ul className="row navbar">
                        <li className="col list-unstyled" > <a href="ASD" className="text-decoration-none text-white">Inicio</a></li>
                        <li className="col list-unstyled"><a href="ASD" className="text-decoration-none text-white">Contacto</a></li>
                        <li className="col list-unstyled"></li>
                        <li className="col list-unstyled" ><a href="ASD" className="text-decoration-none text-white">Ubicacion </a></li>
                    </ul>
                </div>

                <div className="col  text-center">
                    <a href="#modal"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="48"
                        height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round"
                        stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" /></svg> </a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;