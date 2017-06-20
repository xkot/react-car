import React from 'react';
import { store } from './../../reduxComponents/stores';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
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
                <button type="submit" onClick={(e) => { console.log(store.getState()); e.preventDefault();}}>Submit</button>
            </form>
        );
    }
}

