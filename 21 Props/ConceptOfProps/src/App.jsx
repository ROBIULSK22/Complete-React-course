import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItem from './Components/FoodItem'
import Heading from './Components/Heading'
import EmptyItem from './Components/EmptyItem'

function App() {
 let foodItem = ["Dal","Roti","Sabzi","Egg","vegetable"];
 let Head1 = "Healthy Food For Child";
 return (
      <>
        <Heading key = "Head" Head ={Head1}></Heading>
        <FoodItem Item={foodItem}></FoodItem>
        <EmptyItem Empty={foodItem}></EmptyItem>
      </>
)}

export default App;
