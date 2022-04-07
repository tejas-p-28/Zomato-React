import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';
import Details from './component/Details/restDetails';
import viewOrder from './component/bookings/viewOrder';
import placeOrder from './component/bookings/placeOrder';
import login from './component/loginLogout/login';
import Register from './component/loginLogout/register';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/viewOrders" component={viewOrder}/>
                <Route path="/placeOrder/:restName" component={placeOrder}/>
                <Route path="/login" component={login}/>
                <Route path="/register" component={Register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Router