import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        selectedProduct: null,
        productsLoadingState: 'initial',
        responseError: ''
    },
    reducers: {
        loadProducts: (state, value) => {
            state.list = value.payload;
        },
        removeProducts: (state) => {
            // state.list = [];
        },
        setSelectedProduct: (state, value) => {
            state.selectedProduct = value.payload;
        },
        removeProduct: (state, value) => {
            // const productToRemove = value.payload;
            // state.list = state.list.filter(
            //   (product) => product.id !== productToRemove.id
            // );
        },
        setProductsLoadingState: (state, value) => {
            state.productsLoadingState = value.payload;
        },
        setResponseError: (state, value) => {
            state.responseError = value.payload;
        },
    },
});

export const {
    loadProducts,
    removeProducts,
    setSelectedProduct,
    removeProduct,
    setProductsLoadingState,
    setResponseError
} = productsSlice.actions;

export default productsSlice.reducer;
