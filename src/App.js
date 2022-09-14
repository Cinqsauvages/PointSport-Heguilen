
import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  //browserRouter es un contendor de Rutas//

  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer  />} />
          <Route exact path="/categoria/:tipo" element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
