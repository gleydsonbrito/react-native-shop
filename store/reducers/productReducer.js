import {
    SET_CART,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_CART,
    DELETE_ITEM_CART,
    CREATE_PRODUCT,
    FETCH_PRODUCTS
} from '../actions/products';

const initialState = {
    products: [],
    cart: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART: {
            const itIsInCart = state.cart.some(p => p.id === action.productId);
            if (itIsInCart) {
                return state; 
                break;
            }
            const productToCart = state.products.find( item => item.id === action.productId);
            return { ...state, cart: state.cart.concat(productToCart) };
        }
        case FETCH_PRODUCTS: {
            const products = action.products.map( item => item );
            return { ...state, products: products.reverse() }
        }
        case CREATE_PRODUCT: {
            const newProduct = action.product;
            if(!newProduct) return state;

            return {...state, products: state.products.concat(newProduct).reverse()}
        }
        case UPDATE_PRODUCT: {
            const updatedProduct = action.product
            const index = state.products.findIndex(p => p.id === updatedProduct.id);
            state.products.splice(index, 1);
            return { ...state, products: state.products.concat(updatedProduct) }
        }
        case DELETE_PRODUCT: {
            const updateProducts = state.products.filter(p => p.id !== action.id);
            return { ...state, products: updateProducts }
        }
        case DELETE_CART: {
            return { ...state, cart: [] }
        }
        case DELETE_ITEM_CART: {
            const updatedCart = state.cart.filter(item => item.id !== action.id);
            return { ...state, cart: updatedCart }
        }
        default:
            return state
    }

};

export default productReducer;