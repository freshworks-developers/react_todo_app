import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Form from './Form'
import TodoList from './TodoList'

const TodoContainer = ({client}) => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])


  // Run once 
  useEffect(() => {
    getFromDB();
  }, [])


  useEffect(() => {
    filterHandler();
    saveInDB();
  }, [todos,status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        console.log('case',status);
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        console.log('case',status);
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        console.log('case',status);
        setFilteredTodos(todos);
        break;
    }
  }
  const saveInDB = () => {
    client.db.set('todos',{todoList:todos}).then((data) =>{console.log('saved in DB',data);})
  }

  const getFromDB = () => {
    client.db.get('todos').then((data) => {
      let todos = data.todoList
      setTodos(todos);
    })
  }

  
  return (  
    <>
      <h1>hey {inputText}</h1>
      <Form client={client} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      </>
  );
};


TodoContainer.propTypes = {

};


export default TodoContainer;
