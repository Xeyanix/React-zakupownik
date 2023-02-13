import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";

function ShopingList(props) {
  const [productsToBuy, setProductsToBuy] = useState(null);

  useEffect(() => {
    setProductsToBuy(props.shoppingList);
  }, [props.shoppingList]);

  const removeFromShoppingList = (event, id) => {
    event.preventDefault();
    props.remove(productsToBuy.filter((product) => product.id !== id));
  };

  const productsToDisplay = productsToBuy?.map((product, index) => (

    <li
      onContextMenu={(event) => { removeFromShoppingList(event, product.id); }}
      key={index}>
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