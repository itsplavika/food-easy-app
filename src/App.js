import React from 'react';
import Header from './components/header'
import './App.css';
import Footer from './components/footer';
import FoodApp from './components/food-app';

function FoodEasyApp() {
  return (
    <div className="food-easy-app">
      <Header/>
      <main>
          <h1>FoodEasy</h1>
          <h2>Burger, Pizza, North Indian, South Indian food delivery</h2>
          <FoodApp/>
      </main>
      <Footer/>
    </div>
  );
}

export default FoodEasyApp;
