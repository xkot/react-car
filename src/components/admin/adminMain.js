import React from 'react';
import { Link } from 'react-router-dom';
import { getCars, removeCar } from '../../api';

function Car (props) {
    let car = props.currentCar;
    return (
        <tr id={car.id} className="carTr">
            <td><img className="listImg" height="100" width="130" src={car.photo}/></td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.price} BYN</td>
            <td>
                Пробег: {car.mileage} <br/>
                Топливо: {car.gasoline} <br/>
                КПП: {car.transmission} <br/>
                Объем двигателя: {car.capacity}
            </td>
            <td>
                <button type="button" onClick={(e) => {props.deleteCar(car.id); e.preventDefault()}}>
                    Удалить
                </button> <br/>
                <button type="button" >
                    Редактировать
                </button>
            </td>
        </tr>
    );
}

export class AdminMain extends React.Component {
    constructor (props) {
        super(props);
        this.cars = getCars();
        this.deleteCar = this.deleteCar.bind(this);
    }

    deleteCar (id) {
        removeCar(id);
        alert("Запись удалена!");
        this.render();  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    render() {
        return (
            <div id="adminMain">
                <div id="adminHeader">
                    <Link to='/'>
                        <button type="button" >
                            На главную
                        </button>
                    </Link>
                </div>
                <table>
                    <thead>
                    <tr>
                        <td>Фото</td>
                        <td>Марка</td>
                        <td>Модель</td>
                        <td>Цена</td>
                        <td>Другая информация</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.cars.map(function (car) {
                            return <Car currentCar={car} deleteCar={this.deleteCar} key={"car-" + car.id}/>;
                        }, this)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
