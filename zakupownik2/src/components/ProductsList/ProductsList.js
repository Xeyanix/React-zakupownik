import React, { useState, useEffect } from "react";
import styles from "../../common/styles/Columns.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  loadShoppingList,
  setProductsLoadingState,
} from "../../redux/productsSlice";
import { CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function ProductsList() {
  const loadingStatus = useSelector((state) => state.products.loadingStatus);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [addedItemId, setAddedItemId] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  const [availableProcessors, setAvailableProcessors] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setProductsLoadingState("Loading"));
        const response = await axios.get("http://localhost:9000/products");
        setProducts(response.data);
        dispatch(setProductsLoadingState("success"));
      } catch (error) {
        console.log(error);
        dispatch(setProductsLoadingState("error"));
      }
    };

    fetchProducts();
  }, [dispatch]);



  const handleItemClick = async (product) => {
    try {
      setAddedItemId(product.id);
      const newProduct = { ...product };
      newProduct.id = uuidv4();

      dispatch(setProductsLoadingState("AddingItem"));
      await axios.post(
        `http://localhost:9000/products/shoppingList/new`,
        newProduct
      );

      const response = await axios.get(
        `http://localhost:9000/products/shoppingList`
      );
      dispatch(loadShoppingList(response.data));
      dispatch(setProductsLoadingState("success"));

      //----------------------------------------------------------
      const motherboardResponse = await axios.get(
        `http://localhost:9000/products/${product.id}`
      );
      dispatch(setSelectedProduct(motherboardResponse.data));


      //----------------------------------------------------------

      const processorsResponse = await axios.get(
        `http://localhost:9000/products/cpus/${product.id}`
      );
      dispatch(setSelectedProduct(processorsResponse.data));



    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h2>Wybierz płytę główną</h2>

        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <span onClick={() => handleItemClick(product)}>
                {product.id} {product.name}{" "}
                {loadingStatus === "AddingItem" && addedItemId === product.id ? (
                  <CircularProgress />
                ) : (
                  ""
                )}
              </span>
              <button className={styles.myButton} onClick={() => handleItemClick(product)}>
                Dodaj do koszyka
              </button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}

        {selectedProduct && (
          <div>
            <h3>Selected Motherboard: {selectedProduct.name}</h3>
            {availableProcessors.length > 0 ? (
              <div>
                <h3>Available Processors:</h3>
                <ul>
                  {availableProcessors.map((processor) => (
                    <li key={processor.id}>{processor.name}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Loading processors...</p>
            )}
          </div>
        )}

      </header>
    </div>
  );
}

export default ProductsList;
