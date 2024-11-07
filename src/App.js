import './App.css';
import AddTodo from './mycomponents/AddTodo';
import Footer from './mycomponents/Footer';
import Header from './mycomponents/header';
import ToDos from './mycomponents/ToDos';
import { useState, useEffect } from 'react';

function App() {
  
  let initTodo;
  
  if(localStorage.getItem("todos")===undefined){
    initTodo =[]
  }else{
    initTodo=JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete=(i)=>{
    setTodolist(todolist.filter((e)=>{
      return i!==e
    }))
    // localStorage.setItem('todos',JSON.stringify([...todolist]))
  }

  const addTodo=(title, desc)=>{
    const mytodo={
      sno:todolist.length+1,
      title: title,
      des: desc
    }
    console.log(JSON.stringify(initTodo))
    setTodolist([...todolist,mytodo])
    // localStorage.setItem('todos',JSON.stringify([...todolist]))
  }

  // use effect helps us to save a certain changes every time the dom is effected
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify([...todolist]))
  })

  let [todolist,setTodolist]=useState(initTodo)
  
  return (
    <div className="App">
      <Header title="ToDosList"/>
      <AddTodo addTodo={addTodo}/>
      <ToDos todos={todolist} ondelete={onDelete}/>
      <Footer/>
    </div>
  )
}
export default App;