import { lazy, useState } from 'react'
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
const Products = lazy(() => import ('./views/Products'));
const Orders = lazy(() => import ('./views/Orders'));
const Installation = lazy(() => import('./views/Installation'));
const ProductDetails = lazy(() => import ('./views/ProductsDetails'));
const Register = lazy(() => import ('./views/Register'));
const Login = lazy(() => import ('./views/Login'));
const User = lazy(() => import ('./views/Users'));
const Users = lazy(() => import ('./views/Users'));
import StartANewReact from './views/Installation/StartANewReact';
import AddReactToExistingProject from './views/Installation/AddReactAExisting';
import EditorSetup from './views/Installation/EditorSetup';
import UsingTypeScript from './views/Installation/UsingTypeScript';


function App() {
 
  return (
    <div>
      <Navbar/>
      <Suspense fallback={<div><h1>Loading......</h1></div>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products/>}>
        <Route path="/products-details/:productId/:productName/:productPrice" element={<ProductDetails/>}></Route>
        </Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/installation" element={<Installation/>}>
      
        <Route path="start-a-new-react" element={<StartANewReact/>}></Route>
        <Route path="add-react-to-existing-project" element={<AddReactToExistingProject/>}></Route>
        <Route path="editor-setup" element={<EditorSetup/>}></Route>
        <Route path="using-typescript" element={<UsingTypeScript/>}></Route>

        </Route>

        <Route path="/users" element={<Users/>}></Route>
      </Routes>
        </Suspense>    
      <Footer/>
    </div>
  )
};

export default App  
