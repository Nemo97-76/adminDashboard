import React from 'react';
import "./index.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './pages/signin.js';
import Home from './pages/home.js';
import Sections from './pages/sections.js';
import Categories from './pages/categories.js';
import Orders from './pages/orders.js';
import Trips from './pages/Trips.js';
import AddSec from './pages/AddSec.js';
import AddCate from './pages/addcate.js';
import AddTrip from './pages/addTrip.js';
import UpdateSec from './pages/updateSec.js';
import UpdateCate from './pages/updateCate.js';
import UpdateTrip from './pages/updatetrip.js';
import PageNotFound from './pages/404.js';
import Support from './pages/support.js';
import UpdateOrder from './pages/updateOrder.js';
import Admin from './pages/Admin.js';
//import Emails from './pages/Emails.js';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route expact path="/" element={<Signin />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/sections' element={<Sections />} />
                    <Route path='/sections/addsection' element={<AddSec />} />
                    <Route path="/sections/updatesection" element={<UpdateSec />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/categories/addcategory' element={<AddCate />} />
                    <Route path='/categories/updatecategory' element={<UpdateCate />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path="/orders/updateorder" element={<UpdateOrder />} />
                    <Route path='/trips' element={<Trips />} />
                    <Route path='/trips/addtrip' element={<AddTrip />} />
                    <Route path="/trips/updatetrip" element={<UpdateTrip />} />
                    <Route path='/tasneem' element={<Admin />} /* /:userName that will brestored from database */ >

                    </Route>
                    {/*                     <Route path='/:userName/mails' element={<Emails />} />
 */}                    <Route path='/support' element={<Support />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App