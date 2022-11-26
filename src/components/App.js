import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Pagenotfound from './Pagenotfound';
import Login from './Login';
import ParentC from './Parentc'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Addcategory from './Addcategory';
import Showcategory from './Showcategory';
import Productdetail from './Productdetail';
import Main from './Main';
import Hook1 from './Hook1';
import Hook2 from './Hook2';
import Hook3 from './Hook3';
import Hook4 from './Hook4';
import Show from './Show';
import Add from './Add';
import DeleteProduct from './DeleteProduct';
import Addusingreacthookform from './Addusingreacthookform';
import Basicvalidation from './Basicvalidation';
import Editpro from './Editpro';




function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cartPage" element={<Cart />} />
                <Route path="/loginPage" element={<Login />} />
                <Route path="/parent-child" element={<Main />} />
                <Route path="/parentcomp" element={<ParentC/>} />
                <Route path="/category/add" element={<Addcategory />} />
                <Route path="/category/show" element={<Showcategory />} />
                <Route path="/singlePage/:productId" element={<Productdetail />} />
                <Route path="/hook1" element={<Hook1 />} />
                <Route path="/hook2" element={<Hook2 />} />
                <Route path="/hook3" element={<Hook3 />} />
                <Route path="/hook4" element={<Hook4 />} />
                <Route path="/show" element={<Show/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/add1" element={<Addusingreacthookform/>} />
                <Route path='/basicvalidation' element={<Basicvalidation/>} />
                <Route path="/deletePro/:productId" element={<DeleteProduct/>} />
                <Route path="/single-product/:productId" element={<Productdetail />} />
                <Route path="/deletePro/:productId" element={<DeleteProduct/>} />
                <Route path="/editPro/:productId" element={<Editpro/>} />

                

                
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;


