import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import axios from "./axios-order";
import Modal from "./components/UI/Modal/Modal";
function App() {

  
  return (
    <div className="App">
      <Layout>
       
        <BurgerBuilder>

        </BurgerBuilder>
          
      </Layout>
    </div>
  );
}

export default App;
