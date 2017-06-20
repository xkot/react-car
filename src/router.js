import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { CarPage } from './components/carPage';
import { AdminMain } from './components/admin/adminMain';
import FilterApp from './components/filter/filterApp';
import { store } from './reduxComponents/stores';

render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/car" component={CarPage}/>
                <Route path="/admin" component={AdminMain}/>
                <Route exact path="/" component={FilterApp}/>
            </div>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));


