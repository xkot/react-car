import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { CarPage } from './components/carPage';
// import MainPage from './components/popularCars';
import FilterApp from './components/filter/filterApp';
import { store } from './reduxComponents/stores';

render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {/*<Redirect to="/popular"/>*/}
                {/*<Route path="/car" component={CarPage}/>*/}
                {/*<Route path="/popular" component={MainPage}/>*/}
                <Route path="/search" component={FilterApp}/>
            </div>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));


