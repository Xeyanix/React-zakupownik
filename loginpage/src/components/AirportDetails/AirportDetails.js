import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAirport } from '../../redux/airportsSlice';


const AirportDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const params = useParams();
  // const { id } = params;

  const [dialogIsVisible, setDialogIsVisible] = useState(false);
  const matchAirport = useSelector((state) => state.airports.selectedAirport)
  // const airportsList = JSON.parse(localStorage.airports);
  // const matchAirport = airportsList.find((airport) => airport.airportId === id);

  const handleDeleteItem = () => {
    // const airportListWithoutSelected = airportsList.filter(
    //   (airport) => airport.airportId !== id
    // );
    // localStorage.setItem(
    //   'airports',
    //   JSON.stringify(airportListWithoutSelected)
    // );
    // navigate('/airport/list');

    dispatch(removeAirport(matchAirport));

    navigate('/airport/list', {
      state: {
        removedAirport: matchAirport,
      },
    });
  };


  return (
    <div className={commonColumnsStyles.App}>
      <Dialog
        open={dialogIsVisible}
        onClose={() => setDialogIsVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Czy na pewno chcesz usunąć lotnisko?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Czy na pewno chcesz usunąć lotnisko o nazwie {matchAirport.name},
            które znajduje się w mieście {matchAirport.city} ???
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogIsVisible(false)}>Jednak nie</Button>
          <Button onClick={() => handleDeleteItem()} autoFocus>
            Tak usuwajmy !!
          </Button>
        </DialogActions>
      </Dialog>
      <header className={commonColumnsStyles.AppHeader}>
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <DeleteIcon onClick={() => setDialogIsVisible(true)} />
        <p>Airport Details</p>
        <span>Nazwa: {matchAirport.name}</span>
        <span>Państwo: {matchAirport.country}</span>
        <span>Miasto: {matchAirport.city}</span>
        ...
      </header>
    </div>
  );
};

export default AirportDetails;