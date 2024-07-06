import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './Components/AddTodo'
import AddItem from './Components/AddItem'
import AddItem2 from './Components/AddItem2'
import TodoApp from './Components/TodoApp'
import "./Components/MyApp.css"

function App() {
  return(
    <center>
      <TodoApp></TodoApp>
      <AddTodo></AddTodo>
      <AddItem></AddItem>
      <AddItem2></AddItem2>
      </center>
  )
}

export default App;
