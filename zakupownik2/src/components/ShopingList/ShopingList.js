import React, { useState } from "react";
import styles from "../../common/styles/Columns.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  loadShoppingList,
  setProductsLoadingState,
} from "../../redux/productsSlice";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function ShoppingList() {
  const shoppingList = useSelector((state) => state.products.shoppingList);
  const loadingStatus = useSelector((state) => state.products.loadingStatus);
  const [deletedItemId, setdeletedItemId] = useState(0);
  const dispatch = useDispatch();

  const handleRemoveItem = async (productId) => {
    try {
      setdeletedItemId(productId);
      dispatch(setProductsLoadingState("RemovingItem"));
      await axios.delete(
        `http://localhost:9000/products/shoppingList/${productId}`
      );

      const response = await axios.get(
        `http://localhost:9000/products/shoppingList`
      );
      dispatch(loadShoppingList(response.data));
      dispatch(setProductsLoadingState("success"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveAllClick = async () => {
    try {
      dispatch(setProductsLoadingState("RemovingAllItems"));
      await axios.delete(
        `http://localhost:9000/products/shoppingList`
      );
      await Promise.all([
        axios.get(`http://localhost:9000/products/shoppingList`),
        dispatch(loadShoppingList([])),
      ]);


      dispatch(setProductsLoadingState("success"));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>Shopping List</p>
        <div>
          {shoppingList.length > 0
            ? shoppingList.map((product) => (
              <div key={product.id} className={styles.ProductItem}>
                <div>
                  <span>
                    {product.name}{" "}
                    {loadingStatus === "RemovingItem" &&
                      deletedItemId === product.id ? (
                      <CircularProgress />
                    ) : (
                      ""
                    )}
                  </span>
                  <button
                    className={styles.myButton}
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Usuń
                  </button>
                </div>

              </div >
            ))
            : "Brak produktów do wyświetlenia w koszyku!"}
        </div>
        <button
          onClick={handleRemoveAllClick}>Usuń wszystkie
        </button>
      </header>
    </div >

  );
}

export default ShoppingList;

//nie dziala remove all click 