import React from 'react';
import styles from './ProductsFilters.module.scss';

class ProductsFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      searchType: false,
      searchCategory: '',
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value }
    );
  };

  handleProductType = (event) => {
    this.setState({ searchType: event.target.checked }, 
      () => this.filterProdukty()
    );
  };

  handleSelectCategory = (event) => {
    this.setState({ searchCategory: event.target.value }
    );
  };

  filterProdukty = () => {
    const { produkty } = this.props;
    const { searchPhrase, searchType, searchCategory } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredProducts = produkty.filter((produkty) =>
    produkty.nazwa.includes(searchPhrase)
    );

    if (searchCategory) {
      filteredProducts = filteredProducts.filter(
        (produkty) => produkty.kategoria === searchCategory
      );
    }
    
    if (searchType) {
      filteredProducts = filteredProducts.filter(
        (produkty) => produkty.produktSpozywczy === true
      );

    }
    console.log('sprawdzam aktualne filtry', filteredProducts);
    // przekazanie wyfiltrowanego jedzenia do komponentu rodzica (App)

    this.props.sendfilteredProductsToAppComponent(filteredProducts);
  };

  handleResetFilters = () => {
    this.setState(
      {
        searchPhrase: '',
        searchType: false,
        searchCategory: '',
      },
      () => {
        this.filterProdukty();
      }
    );
  };

  getUniqueFoodCategory = () => {
    const { produkty } = this.props;
    const foodCategoryList = produkty.map((produkty) => produkty.kategoria);
    const foodCategory = [...new Set(foodCategoryList)];
    return foodCategory;
  };
  

  render() {
    const uniqueFoodCategory = this.getUniqueFoodCategory();
    const { searchPhrase, searchType, searchCategory } = this.state;


    return (
      <div className={styles.ProductsFiltersWrapper}>
        <p> Tylko produkty </p>
        <input
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
          ></input>

          <p> Produkt Spożywczy </p>

        <input
          type="checkbox"
          onChange={this.handleProductType}
          value={searchType}
          ></input>

        <select
          value={searchCategory}
          onChange={this.handleSelectCategory}>
          <option key={'all'} value={''}>
            All Categories
          </option>{uniqueFoodCategory.map((kategoria) => (
            <option key={kategoria} value={kategoria}>
              {kategoria}
            </option>
          ))}
        </select>

        <button onClick={this.filterProdukty}>Wyszukaj</button>
        <button onClick={this.handleResetFilters}>Zresetuj filtry</button>
      </div>
    );
  }
}

export default ProductsFilters;
