import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProducts, setProductsLoadingState, setResponseError } from '../../redux/productsSlice';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';
import axios from 'axios';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const getProductsFromAPI = async (path) => {
    try {
      dispatch(setProductsLoadingState('loading'))
      const response = await axios.get(`http://localhost:9000/products}`);
      dispatch(loadProducts(response.data))
      dispatch(setProductsLoadingState('success'))
    } catch (error) {
      dispatch(setProductsLoadingState('error'))
      dispatch(setResponseError(error.response.data.error))
    }
  }
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.signedUserInfo}>
        <Typography sx={{ m: 2 }} variant="h5">
          Zalogowany:{" "}
          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
        </Typography>
        <Button variant="contained" onClick={() => getProductsFromAPI('products')}>Załaduj produkty</Button>
        <Link to="/">
          <Button onClick={handleButtonClick} variant="contained" color="error">
            Wyloguj
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default WithRouterHOC(Header);