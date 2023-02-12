import React from 'react';
// import styles from './Results.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';


function ProductsList(props) {

  const productsList = props.produkty.map((product) => (
    <li 
    onClick={() => props.addToShoppingList(product)} 
    key={product.nazwa}>
      {product.nazwa}
    </li>
  ));

    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
        <p>Lista produktów:</p>
        <ul>{productsList}</ul>
        </header>
      </div>
    );
  }

export default ProductsList;
