import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Todo from "./components/todo";
import Home from "./components/home";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import Admin from "./components/admin";
import Cart from "./components/cart";
import GlobalStoreProvider from "./context/globalStoreProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar></Navbar>
        
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/admin" exact element={<Admin />}></Route>
            <Route path="/catalog" exact element={<Catalog />}></Route>
            <Route path="/about" exact element={<About />}></Route>
            <Route path="/shoppingList" exact element={<Todo />}></Route>
            <Route path="/cart" exact element={<Cart />}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>  
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
