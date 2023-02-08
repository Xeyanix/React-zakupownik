import React, { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import produkty from './common/consts/produkty';
import styles from './App.module.scss';

function App() {
  const [productsListToDisplay, setproductsListToDisplay] = useState(produkty);
  console.log('wszystkie pojazdy', produkty);
  return (
    <div className={styles.appWrapper}>
      <ProductsFilters
        produkty={produkty}
        sendFilteredVehiclesToParentComponent={setproductsListToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList productsToDisplay={productsListToDisplay} />
        <ShopingList productsToDisplay={productsListToDisplay} />
      </div>
    </div>
  );
}

export default App;
