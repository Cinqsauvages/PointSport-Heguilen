
import './App.css';
import 'core-js/actual';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Provider from './components/CartContext';
import Error404 from './components/error404';
import Form from './components/Form';

function App() {
  //browserRouter es un contendor de Rutas//

  return (
    <Provider  >
        <BrowserRouter >
          <Header />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:tipo" element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path="/checkout" element={<Form/>} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
