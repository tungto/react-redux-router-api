import * as ActionTypes from '../constants/ActionTypes';

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    })
    return result;
}

var initialState = [];
const productsReducer = (state = initialState, action) => {
    let index = -1;
    var { id, product } = action;
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case ActionTypes.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case ActionTypes.ADD_PRODUCT:
            console.log(action.product)
            return [...state, action.product]
        case ActionTypes.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state]
        default: return [...state];
    }
}

export default productsReducer;