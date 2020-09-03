import { SET_ORDERS } from '../actions/orders';

const inicialState = {
    orders: []
}

const orderReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_ORDERS: {
            const order = action.order;
            return {...state, orders: state.orders.concat(order).reverse()}
        }

        default:
            return state
    }
};

export default orderReducer;