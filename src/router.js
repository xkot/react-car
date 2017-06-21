import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { CarPage } from './components/carPage';
import { AdminMain } from './components/admin/adminMain';
import { AddPage } from './components/admin/addCar';
import FilterApp from './components/filter/filterApp';
import { store } from './reduxComponents/stores';

render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/car/:carId" component={CarPage}/>
                <Route path="/addCar" component={AddPage}/>
                <Route path="/editCar/:carId" component={AddPage}/>
                <Route path="/admin" component={AdminMain}/>
                <Route exact path="/" component={FilterApp}/>
            </div>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));


