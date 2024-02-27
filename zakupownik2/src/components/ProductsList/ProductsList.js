import React, { useState, useEffect } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  loadShoppingList,
  setProductsLoadingState,
} from "../../redux/productsSlice";
import { CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function ProductsList() {
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const loadingStatus = useSelector((state) => state.products.loadingStatus);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [addedItemId, setAddedItemId] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // New state to store selected product
  const [processors, setProcessors] = useState([]);

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

      // Fetch processors for selected motherboard
      const processorResponse = await axios.get(
        `http://localhost:9000/products/${product.id}/processors`
      );
      setProcessors(processorResponse.data);

      // Set the selected product
      setSelectedProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        {products.length > 0 ? (
          products.map((product) => (
            <span key={product.id} onClick={() => handleItemClick(product)}>
              {product.id} {product.name}{" "}
              {loadingStatus === "AddingItem" && addedItemId === product.id ? (
                <CircularProgress />
              ) : (
                ""
              )}
            </span>
          ))
        ) : (
          <p>Loading products...</p>
        )}

        {selectedProduct && (
          <div>
            <h2>Selected Motherboard: {selectedProduct.name}</h2>
            <h3>Available Processors:</h3>
            <ul>
              {processors.map((processor) => (
                <li key={processor.id}>{processor.name}</li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default ProductsList;
