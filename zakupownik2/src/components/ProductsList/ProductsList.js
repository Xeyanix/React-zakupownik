import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProduct, setResponseError, setProductsLoadingState } from '../../redux/productsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const ProductsList = () => {
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);
  const productsList = useSelector((state) => state.products.list);
  const loadingStatus = useSelector((state) => state.products.productsLoadingState);
  const responseError = useSelector((state) => state.products.responseError);
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();


  useEffect(() => {
    setSnackbarIsVisible(true);
  }, [responseError]);

  const handleItemClick = async (product) => {
    try {
      dispatch(setProductsLoadingState('loading'))
      const response = await axios.get(`http://localhost:9000/products/${product.id}/delayed`);
      dispatch(setSelectedProduct(response.data))
      dispatch(setProductsLoadingState('success'))
      navigate(`/product/details/${product.id}`);
    } catch (error) {
      dispatch(setProductsLoadingState('error'))
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <Snackbar
        open={snackbarIsVisible}
        autoHideDuration={3000}
        onClose={() => setSnackbarIsVisible(false)}
        message={`${responseError}`}
      />
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products List</p>
        {loadingStatus === 'loading' ? <CircularProgress /> :
          productsList.length > 0
            ? productsList.map((product) => (
              <span onClick={() => handleItemClick(product)}>
                {' '}
                {product.name} {product.id}{' '}
              </span>
            ))
            : 'brak produktów do wyświetlenia'}
        {/* Poniżej znajduje się ostylowany aktywny produkt do zadania 5 */}
        {/* <span
          style={{
            backgroundColor: "white",
            border: "1px black solid",
            borderRadius: "16px",
            padding: "6px",
          }}
        >
          Przykładowy aktywny produkt
        </span> */}
      </header>
    </div>
  );
}

export default ProductsList;
