import React from 'react';
import {Filter} from './filter';
import {getCars} from './../api';
import { Link } from 'react-router-dom';


function Bar (props) {
    return (
        <Link to={'car/' + props.id}>
            <div className="bar" onClick={props.onClick}>
                <div>
                    <span className="brand">{props.brand} {props.model}</span><br/>
                    <img src={props.photo} width="150px"/><br/>
                    {props.mileage} км, {props.capacity} л <br/>
                    {props.price} BYN <br/>
                </div>
            </div>
        </Link>
    );
}

export default class MainPage extends React.Component {
    constructor () {
        super();
        this.state = {
            barList: [],
            brand: '',
            model: '',
            minPrice: '',
            maxPrice: '',
            minYear: '',
            maxYear: '',
            transmission: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        let cars = getCars();
        cars.sort((a, b) => {return b.views-a.views});
        cars.slice(0,25);
        this.setState({
            barList: cars
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        // alert(`Марка: ${this.state.brand},
        // Модель: ${this.state.model},
        // Цена: от ${this.state.minPrice} до ${this.state.maxPrice},
        // АКПП: ${this.state.transmission}`);
        // event.preventDefault();
        alert ('submit');
    }

    render() {
        return (
                <div id="main">
                    <div id="listView">
                        {
                            this.state.barList.map(function (car) {
                                return <Bar
                                    key = {car.id}
                                    id = {car.id}
                                    brand = {car.brand}
                                    model = {car.model}
                                    photo = {car.photo}
                                    capacity = {car.capacity}
                                    mileage = {car.mileage}
                                    price = {car.price}
                                />;
                            })
                        }
                    </div>
                    <Filter onChange={this.handleInputChange} onClick={this.handleSubmit}/>
                </div>
        );
    }
}