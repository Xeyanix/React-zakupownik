import React from 'react';
import { useState } from "react";
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from './common/consts/produkty';
import styles from './App.module.scss';

function App() {
  const cart = [];

  const [prodcuts, setProducts] = useState(produkty); //1
  const [shoppingList, setShoppingList] = useState(cart); //2

//spoko
  return (
    <div className={styles.appWrapper}>
      <ProductsFilters
        produkty={produkty}
        sendfilteredProductsToParentComponent={setProducts}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          productList={prodcuts}
          sendResultsToParent={(resultsFromShoppingList) => setShoppingList(resultsFromShoppingList)}
        />
        <ShopingList
          shoppingList={shoppingList}
          remove={setShoppingList}
        />
      </div>
    </div>
  );
};

export default App;
