import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";

function ShopingList(props) {
  const [productsToBuy, setProductsToBuy] = useState(null);



  useEffect(() => {
    setProductsToBuy(props.shoppingList);
  }, [props.shoppingList]);



  const removeFromShoppingList = (id) => {
    props.remove(productsToBuy.filter((product) => product.id !== id));
  };


  const productsToDisplay = productsToBuy?.map((product, index) => (
    <li
      onContextMenu={() => { removeFromShoppingList(product.id); }}
      key={product.id}>
      {product.nazwa}
    </li>
  ));

  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Koszyk produktów:</p>
        <ul>{productsToDisplay}</ul>
      </header>
    </div>
  );
}

export default ShopingList;