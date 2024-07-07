import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let foodItem =["Dal","Roti","Milk","vegitable"];
  // use of condition statement
  /*if(foodItem.length === 0){
    return <h3> I am still hungry</h3>
  }*/
  return (
    <>
    <h1>Healty Food</h1>
    <ul class="list-group">
    {/* This is using conditional statement */}
    {/* {foodItem.length === 0?<h3>I am still Hungry</h3>:null} */}
    {foodItem.length === 0 && <h3>I am still Hungry</h3>}
    {foodItem.map((item)=>(
      <li key={item} class="list-group-item">{item}</li>
    ))}
  </ul>
    </>
    
  );
  
}

export default App;
