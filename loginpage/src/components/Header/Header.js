import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    const userFromLocalStorage = localStorage.loggedUser && JSON.parse(localStorage.loggedUser)
    return (
      <div className={styles.HeaderWrapper}>
        <Link to="/">
          <button> Sign out </button>
        </Link>
        Jestes zalogowany jako:
        {userFromLocalStorage?.userFirstName}{" "}
        {userFromLocalStorage?.userLastName}

      </div>
    );
  }
}

export default Header;
