import React from 'react';
import { store } from './../../reduxComponents/stores';
import { getCars } from './../../api';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    filterCars () {
        let allCars = getCars();
        let storeInfo = store.getState();
        if (storeInfo.brand) {
            allCars = allCars.filter((car) => {return car.brand.toUpperCase() === storeInfo.brand.toUpperCase()});
        }
        if (storeInfo.model) {
            allCars = allCars.filter((car) => {return car.model.toUpperCase() === storeInfo.model.toUpperCase()});
        }
        if (storeInfo.minPrice) {
            allCars = allCars.filter((car) => {return car.price >= storeInfo.minPrice});
        }
        if (storeInfo.maxPrice) {
            allCars = allCars.filter((car) => {return car.price <= storeInfo.maxPrice});
        }
        if (storeInfo.minYear) {
            allCars = allCars.filter((car) => {return car.year >= storeInfo.minYear});
        }
        if (storeInfo.maxYear) {
            allCars = allCars.filter((car) => {return car.year <= storeInfo.maxYear});
        }

        return allCars;
    }

    render() {
        return (
            <form id="filter">
                <label>
                    Марка:
                    <input
                        name="brand"
                        type="text"
                        onChange={(e) => this.props.getFilterValue(e, "brand")} />
                </label>
                <br /><br />
                <label>
                    Модель:
                    <input
                        name="model"
                        type="text"
                        onChange={(e) => { this.props.getFilterValue(e, "model"); }} />
                </label>
                <br /><br />
                <label>
                    Цена: <br />от
                    <input
                        name="minPrice"
                        type="number"
                        onChange={(e) => this.props.getFilterValue(e, "minPrice")} />
                     до
                    <input
                        name="maxPrice"
                        type="number"
                        onChange={(e) => this.props.getFilterValue(e, "maxPrice")} />
                </label>
                <br /><br />
                <label>
                    Год: <br />от
                    <input
                        name="minYear"
                        type="number"
                        onChange={(e) => this.props.getFilterValue(e, "minYear")} />
                     до
                    <input
                        name="maxYear"
                        type="number"
                        onChange={(e) => this.props.getFilterValue(e, "maxYear")} />
                </label>
                <br /><br />
                <label>
                    АКПП:
                    <input
                        name="transmission"
                        type="checkbox"
                        onChange={(e) => this.props.getFilterValue(e, "maxYear")} />
                </label>
                <button type="submit" onClick={(e) => {
                    let cars = this.filterCars();
                    this.props.getFilteredCars(cars);
                    e.preventDefault();}}>
                    Submit
                </button>
            </form>
        );
    }
}

