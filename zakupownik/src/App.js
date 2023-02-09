import React, { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from './common/consts/produkty';
import styles from './App.module.scss';

function App() {
  const [productsListToDisplay, setProductsListToDisplay] = useState(produkty);
  console.log('wszystkie produkty', produkty);
  return (
    <div className={styles.appWrapper}>
      <ProductsFilters
        produkty={produkty}
        sendfilteredProductsToParentComponent={setProductsListToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList productsToDisplay={productsListToDisplay} />
        <ShopingList  />
      </div>
    </div>
  );
}

export default App;
