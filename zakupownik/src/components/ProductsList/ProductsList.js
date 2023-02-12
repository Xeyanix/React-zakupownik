
import React from 'react';
// import styles from './ProductsList.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
    };
  }

  addProduct = () => {
    this.setState({ shoppingCart: [...this.state.shoppingCart] });
    console.log(this.state.shoppingCart);
    this.props.sendResultsToParent(this.state.shoppingCart);

    this.setState(prevState => ({
      shoppingCart: [prevState.shoppingCart]
    }));
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
