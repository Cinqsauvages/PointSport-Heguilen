
import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import  ItemListContainer from './components/ItemListContainer';

let productos = [
  {
      id: 1,
      nombre: "calza Rayada",
      precio: "2500"

  },
  {
      id: 2,
      nombre: "Top",
      precio: "1500"

  },
  {
      id: 3,
      nombre: "Conjunto Animal Print",
      precio: "3500"

  }
]

let mapeo = productos.map((product) =>{
  return <li>{product.nombre} ${product.precio}</li>
  
})

function App() {
  
  return (
    <div >
      <Header />
      <ItemListContainer  valor={mapeo}/> 
    </div>
 
  );
}

export default App;
