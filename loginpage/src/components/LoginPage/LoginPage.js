// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import airports from '../../common/consts/airports';
import { uniqueId } from 'lodash';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleButtonClick = () => {
    const userData = { userFirstName: firstName, userLastName: lastName };
    localStorage.setItem('loggedUser', JSON.stringify(userData));
    // localStorage.setItem(
    //   'airports',
    //   JSON.stringify(
    //     airports.map((airport) => ({ ...airport, airportId: uniqueId() }))
    //   )
    // );
    navigate('/airport/list');
  };

  return (
    <Box m={4}>
      <TextField
        id="outlined-basic"
        label="Imie"
        variant="outlined"
        onChange={handleFirstName}
        sx={{ p: 2 }}
      />

      <TextField
        id="outlined-basic"
        label="Nazwisko"
        variant="outlined"
        onChange={handleLastName}
        sx={{ p: 2 }}
      />

      <Button
        onClick={handleButtonClick}
        disabled={!firstName || !lastName}
        variant="outlined"
        size="large"
        sx={{ mt: 2 }}
      >
        LOGIN
      </Button>
    </Box>
  );
};