import Navbar from "./components/navBar";
import "./App.css";
import Product from "./components/product";
import Catalog from "./components/catalog";
import About from "./components/about";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App(){
  return (
    <div className="App">
      <Navbar></Navbar>
     <h1>Hello World from React!</h1>

     <Product></Product>
     <Catalog></Catalog>
     
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;
