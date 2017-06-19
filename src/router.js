import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CarPage } from './components/carPage';
import MainPage from './components/popularCars';

render((

    <BrowserRouter>
        <div>
            <Redirect to="/popular"/>
            <Route path="/car" component={CarPage}/>
            <Route path="/popular" component={MainPage}/>
        </div>
    </BrowserRouter>

), document.getElementById('root'));


