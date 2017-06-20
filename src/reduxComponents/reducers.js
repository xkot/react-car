import { GET_FILTER_VALUE } from './actions';
import { GET_CARS } from './actions';

const initialState = {
    brand: "",
    model: "",
    transmission: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    carArray: []
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

