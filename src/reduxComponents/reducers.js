import { GET_FILTER_VALUE } from './actions';
import { GET_CARS } from './actions';
import { getCars } from './../api';

let filteredCars = getCars();

const initialState = {
    brand: "",
    model: "",
    transmission: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    carArray: filteredCars
};

export default function filter (state = initialState, action) {
    switch (action.type) {
        case GET_FILTER_VALUE:
            return { ...state,
                [action.filter]: action.value
            };
        case GET_CARS:
            return {...state, carArray: action.cars};
    }
}

