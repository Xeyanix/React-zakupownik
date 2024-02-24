import React, { useState } from "react";
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
  const [addedItemId, setaddedItemId] = useState(0);

  const handleItemClick = async (product) => {
    try {
      setaddedItemId(product.id);
      const newProduct = { ...product };
      newProduct.id = uuidv4();

      dispatch(setProductsLoadingState(`AddingItem`));
      await axios.post(
        `http://localhost:9000/products/shoppingList/new`,
        newProduct
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
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
            <span onClick={() => handleItemClick(product)}>
              {" "}
              {product.id} {product.name}{" "}
              {loadingStatus === "AddingItem" &&
                addedItemId === product.id
                ? (
                  <CircularProgress />
                ) : (
                  ""
                )
              }
            </span>
          ))
          : "brak produktów do wyświetlenia"}
      </header>
    </div>
  );
}

export default ProductsList;
