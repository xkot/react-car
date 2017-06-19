import React from 'react';
import { GET_FILTER_VALUE } from './../reduxComponents/actions';
import getFilterValue from './../reduxComponents/reducers';
import { store } from './../reduxComponents/stores';


export class Filter extends React.Component {
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
                        onChange={(e) => {store.dispatch(getFilterValue("brand", e.target.value)); e.preventDefault()}} />
                </label>
                <br /><br />
                <label>
                    Модель:
                    <input
                        name="model"
                        type="text"
                        // value={}
                        onChange={this.props.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    Цена: <br />от
                    <input
                        name="minPrice"
                        type="number"
                        // value={}
                        onChange={this.props.handleInputChange} />
                     до
                    <input
                        name="maxPrice"
                        type="number"
                        // value={}
                        onChange={this.props.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    Год: <br />от
                    <input
                        name="minYear"
                        type="number"
                        // value={}
                        onChange={this.props.handleInputChange} />
                     до
                    <input
                        name="maxYear"
                        type="number"
                        // value={}
                        onChange={this.props.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    АКПП:
                    <input
                        name="transmission"
                        type="checkbox"
                        // checked={}
                        onChange={this.props.handleInputChange} />
                </label>
                <button type="submit" onClick={(e) => { console.log(store.getState().filterValues); e.preventDefault();}}>Submit</button>
            </form>
        );
    }
}