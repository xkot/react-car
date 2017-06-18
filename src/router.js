import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './index';
import { CarPage } from './carPage';

render((
    <BrowserRouter basename={<MainPage/>}>
        <Route path="/" component={MainPage}>
            <Route path="/car" component={CarPage}/>
        </Route>
    </BrowserRouter>
), document.getElementById('root'));