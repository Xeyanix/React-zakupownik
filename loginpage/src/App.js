import Header from './components/Header/Header';
import styles from './App.module.scss';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.loggedUser) {
      navigate('/');
    }
  });
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
