import React from 'react';
import { Link } from 'react-router-dom';
import { store } from './../reduxComponents/stores';


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

export default class carView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            barList: []
        };
    }

    componentDidMount () {
        this.props.getFilteredCars();
        const cars = store.getState().carArray;
        console.log(cars);
        cars.sort((a, b) => {return b.views-a.views});
        cars.slice(0,25);
        this.setState({
            barList: cars
        });
    }

    render() {
        return (
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
        );
    }
}