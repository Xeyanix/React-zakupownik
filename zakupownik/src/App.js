import React from 'react';
import { useState } from "react";
import AddProducts from './components/AddProducts/AddProducts';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from './common/consts/produkty';
import styles from './App.module.scss';

function App() {
  const cart = [];

  const [prodcuts, setProducts] = useState(produkty); 
  const [shoppingList, setShoppingList] = useState(cart); 

  return (
    <div className={styles.appWrapper}>
      <AddProducts/>
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
