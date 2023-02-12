import React from 'react';
import { useState } from "react";
import AddProducts from './components/AddProducts/AddProducts';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from './common/consts/produkty';
import styles from './App.module.scss';

function App() {
  const [products, setProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState(products);

  const addToShoppingList = (product) => {
    setShoppingList((state) => [...state, { ...product, id: Math.random(), isClicked: false },
    ]);
  };

  const addNewProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    setProductsToDisplay([...products, product]);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts/>
      <ProductsFilters
        produkty={produkty}
        sendfilteredProductsToAppComponent={setProductsToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          produkty={productsToDisplay}
          addToShoppingList={addToShoppingList}
        />
        <ShopingList
          shoppingList={shoppingList}
          remove={setShoppingList}
        />
      </div>
    </div>
  );
}

export default App;
