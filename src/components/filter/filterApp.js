import React from 'react';
import Filter from './filter';
import CarView from './../popularCars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from './../../reduxComponents/stores';
import { bindActionCreators } from 'redux';
import { getFilteredCars, getFilterValue } from './../../reduxComponents/actions';
import { getCars } from './../../api';

class FilterApp extends React.Component {
    constructor() {
        super();
        this.getFilterValue = this.getFilterValue.bind(this);
        this.getFilteredCars = this.getFilteredCars.bind(this);
    }

    getFilterValue(e, type) {
        let targetValue = e.target.value;
        this.props.getFilterValue(type, targetValue);
    }

    getFilteredCars (cars) {
        cars = cars || getCars();
        this.props.getFilteredCars(cars);
        console.log(store.getState());
    }

    render() {
        return (
            <div>
                <div id="mainHeader" className="header">
                    <Link to='/admin'>
                        <button type="button" >
                            Панель администрирования
                        </button>
                    </Link>
                </div>
                <div id = "main">
                    <CarView getFilteredCars={this.getFilteredCars}/>
                    <Filter getFilterValue={this.getFilterValue} getFilteredCars={this.getFilteredCars}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFilterValue: bindActionCreators(getFilterValue, dispatch),
        getFilteredCars: bindActionCreators(getFilteredCars, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp)