export const GET_FILTER_VALUE = 'GET_FILTER_VALUE';

export const getFilterValue = (filter, value) => {
    return {
        type: GET_FILTER_VALUE,
        filter,
        value
    }
};
