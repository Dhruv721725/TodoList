import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default function ToDos(props) {
  return (
    <>
    <div>
      <h3 className='mt-4'>ToDos List</h3>
      <div className="todosgrid">
      {props.todos.length<1 ? "No todos available!":
      props.todos.map((tod)=>{
        return <Todo todo={tod} key = {tod.sno} onDelete = {props.ondelete}/>
      })}
      </div>
    </div>
    </>
  )
}

ToDos.propTypes={
  todolist : PropTypes.array
}


