
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'



const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
     
     filteredTodos.length > 0? filteredTodos.map((todo) => (
            <Todo key={todo.id} id={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          )) : <h3> No Todo's yet,Add a new one?</h3>
        }
      </ul>
    </div>
  );
};


TodoList.propTypes = {

};


export default TodoList;
