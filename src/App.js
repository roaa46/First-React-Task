import Home from './components/Home/Home';
import Navs from "./components/Navs/Navs";
import React, { Fragment } from "react";
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
            <Navs/>
            <Home/>
            <Product/>
            <Footer/>
        </Fragment>
  );
}

export default App;
