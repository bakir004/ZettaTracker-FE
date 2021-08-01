import React from 'react';
import { useAppStyles } from "../styles/appStyles"
import MainRouter from './mainRouter';

function App() {
  const styles = useAppStyles();
  return (
    <div className={styles.root}>
      <MainRouter></MainRouter>
    </div>
  );
}

export default App;
