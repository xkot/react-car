import React from 'react';
import { getCarById, incViews } from '../api';
import { Link } from 'react-router-dom';

export class CarPage extends React.Component {
    constructor (props) {
        super (props);
        console.log(this.props);
        let id = this.props.match.params.carId;
        this.car = getCarById(id);
        incViews(id);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Link to='/'>
                        <button type="button" >
                            На главную
                        </button>
                    </Link>
                </div>
                <div id="carInfo">
                    <span>Просмотров: {this.car.views}</span><br/>
                    <div id="infoCar">Информация о машине: <br/>
                        <span id="brandModel" >{this.car.brand} {this.car.model} </span><br/>
                        <span id="carPrice"> Цена: {this.car.price} BYN </span><br/>
                        Пробег: {this.car.mileage} км <br/>
                        Объем двигателя: {this.car.capacity} л <br/>
                        Тип топлива: {this.car.gasoline} <br/>
                        КПП: {this.car.transmission}
                    </div>
                    <div id="carPhoto">
                        <img src={this.car.photo}/><br/>
                    </div>
                </div>
            </div>
        );
    }
}
