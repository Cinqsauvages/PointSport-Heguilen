
import './App.css';
let imagen = "./1659306821532.jpg";
let nombre = "Heguilen Juan Pablo";
let datos = "Tengo 25 años de edad. Soy de Argentina, Bahia Blanca, provincia de Bs As. Estudiante de Tecnicatura en Optica en UNS, y de Full Stack en CoderHouse.";



function App() {
  return (
    <div className='container bg-dark'>
      <div className='row '>
        <div className='col'>
          <img src={imagen} alt="foto de perfil" className="img-thumbnail" />

        </div>
        <div className='col '>
          <h1 className='display-2 text-center text-white border-bottom border-3'>
            {nombre}
          </h1>
          <p className='text-center fs-4 text-white'>
            {datos}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
