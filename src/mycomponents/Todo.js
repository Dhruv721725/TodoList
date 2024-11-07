import React from 'react'

export default function Todo(props) {
  return (
    <div className='todoCard'>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.des}</p>
      <button className='btn btn-danger btn-sm'
       onClick={()=>(props.onDelete(props.todo))}
      >Delete</button>
    </div>
  )
}

