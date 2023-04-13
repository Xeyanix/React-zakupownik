import React from 'react';
import styles from './Header.module.scss';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAirports, loadAirports } from '../../redux/airportsSlice';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const userFromLocalStorage =
    localStorage.loggedUser && JSON.parse(localStorage.loggedUser);
  return (
    <div className={styles.HeaderWrapper}>
      <button onClick={handleButtonClick}>Sign Out</button>
      <p>Jesteś zalogowany jako: </p>
      {userFromLocalStorage?.userFirstName} {userFromLocalStorage?.userLastName}
      <button

        onClick={() => dispatch(loadAirports())}
      >
        Załaduj Lotniska
      </button>
      <button
        onClick={() => dispatch(deleteAirports())}
      >
        Usuń Lotniska
      </button>



    </div>
  );
};

export default WithRouterHOC(Header);
