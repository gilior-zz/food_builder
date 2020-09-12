import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import axios from "./axios-order";
import Modal from "./components/UI/Modal/Modal";
function App() {

  const [show, update_show] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      update_show(false);
    }, 5000);
    return () => {

    }
  })
  return (
    <div className="App">
      <Layout>
        {show ? <BurgerBuilder /> : null}



      </Layout>
    </div>
  );
}

export default App;
