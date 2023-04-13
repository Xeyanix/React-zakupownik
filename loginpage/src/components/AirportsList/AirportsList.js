import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAirport } from '../../redux/airportsSlice';

const AirportList = () => {
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);

  // const airportsList = JSON.parse(window.localStorage.getItem('airports'));
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location?.state?.removedAirport) {
      setSnackbarIsVisible(true);
    }
  }, [location]);

  const airportsList = useSelector(state => state.airports.list)

  const handleSelectedAirports = (airport) => {
    dispatch(setSelectedAirport(airport));

    navigate(`/airport/details/${airport.airportId}`)
  }
  // }

  return (
    <div className={commonColumnsStyles.App}>
      <Snackbar
        open={snackbarIsVisible}
        autoHideDuration={3000}
        onClose={() => setSnackbarIsVisible(false)}
        message={`Usunąłeś lotnisko o nazwie ${location?.state?.removedAirport?.name}`}
      />
      <header className={commonColumnsStyles.AppHeader}>
        <p>AirportList</p>
        {airportsList.map((airport) => (
          <span
            onClick={() => handleSelectedAirports(airport)}
          >
            {' '}
            {airport.name} {airport.airportId}{' '}
          </span>
        ))}

      </header>
    </div>
  );
};

export default AirportList;