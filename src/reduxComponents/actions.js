export const GET_FILTER_VALUE = 'GET_FILTER_VALUE';
export const GET_CARS = 'GET_CARS';

export const getFilterValue = (filter, value) => {
    return {
        type: GET_FILTER_VALUE,
        filter,
        value
    }
};

export const getFilteredCars = (cars) => {
    return {
        type: GET_CARS,
        cars
    }
};