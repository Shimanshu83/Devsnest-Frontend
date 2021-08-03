import logo from './logo.svg';
import './App.css';
import Food from './components/Food'
import { useState } from "react";

function App() {


  const [data , setData] = useState([
    {name:'Apple',amount:45},
    {name:'Burger',amount:65},
    {name:'Chicken',amount:85},
    {name:'Jalebi',amount:455},
    {name:'Samosa',amount:465},
    {name:'Banana',amount:89}
  ])
  return (
    <div className="container">
      <h1>Instructions</h1>
      <ul className="instruction">
        <li> build a container. </li>
        <li> create a seperate function and use it as a component. </li>
        <li> pass props "calory and food" and call it to main component. </li>
      </ul>

      <div className="calorie-container">
        <h1> Calorie Read Only</h1>
        <div className="calorie-list">
        <Food name='Apple' amount='3434' />
        <Food name='Mango' amount='64' />
        <Food name='WaterMellon' amount='8434' />
        <Food name='Grapes' amount='3434' />
        <Food name='Walnut' amount='334' />
        <Food name='Pizza' amount='434' />

        </div>
      </div>

    </div>

  );
}

export default App ; 