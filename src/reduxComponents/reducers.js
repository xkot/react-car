import { GET_FILTER_VALUE } from './actions';

const initialState = {
    filterValues: {},
};

export default function filter (state = initialState, action) {
    switch (action.type) {
        case GET_FILTER_VALUE:
            return state.map((filter, value) => {
                return Object.assign({}, state, {
                    [filter]: value
                });
            });
        default:
            return state;
    }
}

