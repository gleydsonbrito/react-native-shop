export const SET_ORDERS = 'SET_ORDERS';

export const setOrders = order => {
    return {
        type: SET_ORDERS,
        order: order
    }
}