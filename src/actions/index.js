import * as ActionTypes from '../constants/ActionTypes';
import callAPI from '../ulties/apiCaller'





export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id, products) => {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        products
    }
}

export const actAddProductRequest = product => {
    return dispatch => {
        return callAPI('products', "POST", product).then(res => {
            dispatch(actAddProduct(res.data))
        });
    }
}

export const actAddProduct = product => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = id => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = product => {
    return dispatch => {
        return callAPI(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        });
    };
}

export const actUpdateProduct = product => {
    return {
        type: ActionTypes.UPDATE_PRODUCT,
        product
    }
}