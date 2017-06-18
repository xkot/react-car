import React from 'react';
import ReactDOM from 'react-dom';
import {getCarById} from './api';

export function CarPage () {
    let car = getCarById(1);
    return (
        <div>
            <div id="carInfo">
                <span className="brand">{car.brand} {car.model}</span><br/>
                <img src={car.photo} width="150px"/><br/>
                {car.mileage} км, {car.capacity} л <br/>
                {car.price} BYN <br/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <CarPage />,
    document.getElementById('root')
);