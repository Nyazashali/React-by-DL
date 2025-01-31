import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import Footer from './components/Footer';
import Orders from './views/Orders';
import Installation from './views/Installation';
import StartANewReact from './views/Installation/StartANewReact';
import AddReactToExistingProject from './views/Installation/AddReactAExisting';
import EditorSetup from './views/Installation/EditorSetup';
import UsingTypeScript from './views/Installation/UsingTypeScript';
import ProductDetails from './views/ProductsDetails';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products/>}>
        <Route path="/products-details/:productId/:productName/:productPrice" element={<ProductDetails/>}></Route>
        </Route>
        <Route path="/installation" element={<Installation/>}>

        <Route path="start-a-new-react" element={<StartANewReact/>}></Route>
        <Route path="add-react-to-existing-project" element={<AddReactToExistingProject/>}></Route>
        <Route path="editor-setup" element={<EditorSetup/>}></Route>
        <Route path="using-typescript" element={<UsingTypeScript/>}></Route>

        </Route>
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default App  
