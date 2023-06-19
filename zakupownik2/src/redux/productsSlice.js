import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

export const productsSlice = createSlice({
    name: 'airports',
    initialState: {
        list: [],
        selectedProduct: null,
        airportsLoadingState: 'initial',
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
            // const airportToRemove = value.payload;
            // state.list = state.list.filter(
            //   (airport) => airport.id !== airportToRemove.id
            // );
        },
        setProductsLoadingState: (state, value) => {
            state.airportsLoadingState = value.payload;
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
