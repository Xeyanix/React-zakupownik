
// import styles from './ShopingList.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";


function ShopingList(props) {
  const [productsToBuy, setProductsToBuy] = useState(null);

  useEffect(() => {
    setProductsToBuy(props.shoppingList);
  }, [props.shoppingList]);

  const removeFromShoppingList = (id) => {
    // id.preventDefault();
    props.remove(productsToBuy.filter((product) => product.id !== id));
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <ul>
          {props.shoppingList.map((produkt, index) => (
            <li
            onContextMenu={() => {
              removeFromShoppingList(produkt.id);
            }}
          
              key={index}
            >
              {produkt}

            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
