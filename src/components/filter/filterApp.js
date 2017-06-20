import React from 'react';
import Filter from './filter';
import CarView from './../popularCars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilteredCars, getFilterValue } from './../../reduxComponents/actions';
import { store } from './../../reduxComponents/stores';
import { getCars, setRandom } from './../../api';

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
    }

    render() {
        return (
            <div id = "main">
                <CarView getFilteredCars={this.getFilteredCars}/>
                <Filter getFilterValue={this.getFilterValue} getFilteredCars={this.getFilteredCars}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // filters: state.mainReducer.filters,
        // posts: state.mainReducer.filteredPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFilterValue: bindActionCreators(getFilterValue, dispatch),
        getFilteredCars: bindActionCreators(getFilteredCars, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp)