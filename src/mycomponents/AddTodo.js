import React from 'react'
import {useState} from 'react'

export default function AddTodo(props) {
  
  let adStyle={
    display:'grid',
    padding:'20px',
    gridTemplateColumns: '1fr 4fr'
  }
  const [title,setTitle]=useState("")
  const [desc, setDesc]=useState("")

  const submit=(e)=>{
    e.preventDefault()
    if(!title || !desc){
      alert("Title or Description can not be blank.")
    }else{
      props.addTodo(title, desc)
    }
  }
  return (
    <div className='addTodo mt-3'>
      <h3>Add ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3" style={adStyle}>
          <label htmlFor="todoTitle"className="form-label">Title:</label>
          <input type="text" id='todoTitle' className="form-control" 
          value={title} 
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          required/>
        </div>

        <div className="mb-3" style={adStyle}>
          <label htmlFor="todoDes" className="form-label">Description:</label>
          <input type="text" id='todoDes' className="form-control" 
          value = {desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }} 
          required/>
        </div>
        
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  )
}
