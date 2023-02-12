import React from 'react';
// import styles from './Results.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: []
    };
  }

  addProduct = (event) => {
    this.setState({ shoppingCart: [...this.state.shoppingCart, event.target.innerText] });
    console.log(this.state.shoppingCart);
    this.props.sendResultsToParent(this.state.shoppingCart);
  }

  render() {
    const { productList } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <ul>
            {productList.map((produkty, index) => (
              <li
              onClick={this.addProduct}
                key={index}
              >
                {produkty.nazwa}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default ProductsList;
