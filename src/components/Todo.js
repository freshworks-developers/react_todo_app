import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({todos, setTodos, todo}) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    }) 
    )

    console.log('todos',todos);
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : '' } `}>
          {todo.text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i> 
      </button>
      <button onClick={deleteHandler} className='trash-btn' >
        <i className='fas fa-trash'></i> 
      </button>
    </div>
  );
};

Todo.propTypes = {

};


export default Todo;
