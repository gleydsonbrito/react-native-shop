import { 
    CreateProduct, 
    FetchProducts, 
    DeleteProduct,
    UpdateProducts,
} from '../../controllers/productController';

import Product from '../../model/Product';

export const SET_CART = 'SET_CART';
export const DELETE_CART = 'DELETE_CART'
export const DELETE_ITEM_CART = 'DELETE_ITEM_CART';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'SET_PRODUCTS';

export const setCart = (id) => {
    return {
        type: SET_CART,
        productId: id,
    }
};

export const fetchProducts = () => {
    return async dispatch => {
        const res = await FetchProducts();
        const response = await res.json();

        let loadedProducts = [];
        for (const key in response) {
            loadedProducts.push(new Product(
                key,
                response[key].title,
                response[key].price,
                response[key].description,
                response[key].imageUrl)
            )
        };
        dispatch({
            type: FETCH_PRODUCTS,
            products: loadedProducts
        })
    }
}

export const createProduct = product => {
    return async dispatch => {
        await CreateProduct(product);
        dispatch({
            type: CREATE_PRODUCT,
            product: product
        });
    }
};

export const updateProduct = (product) => {
    return async dispatch => {
        await UpdateProducts(product)
        dispatch({
            type: UPDATE_PRODUCT,
            product: product,
        })
    }
};

export const deleteProduct = id => {
    return async dispatch => {
        await DeleteProduct(id);
        return dispatch({
            type: DELETE_PRODUCT,
            id: id,
        })
    }
};

export const deleteCart = () => {
    return {
        type: DELETE_CART,
    }
};

export const deleteItemCart = id => {
        return {
            type: DELETE_ITEM_CART,
            id: id
        }
};