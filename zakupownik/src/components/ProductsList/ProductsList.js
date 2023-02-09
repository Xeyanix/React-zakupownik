import React from 'react';
// import styles from './Results.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class Results extends React.Component {


  render() {
    const { productsToDisplay } = this.props;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <ul>
            {productsToDisplay.map((produkty, index) => (
              <li 
              onClick={() => console.log("clicked!")} 
              key={index}>
                {`${produkty.nazwa}`} 
               </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default Results;
