import {useState, useContext, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import RemainingMessage from './components/RemainingMessage';
import TodoList from './components/TodoList';
import './App.css';

const initialTodoList = [
  {
    id: uuidv4(),
    title: 'watch movie',
    completed: false,

  },
  {
    id: uuidv4(),
    title: 'meeting',
    completed: true,

  },
  {
    id: uuidv4(),
    title: 'party',
    completed: false,

  }
]

function App() {
  const [todoList,setTodoList] = useState(initialTodoList);
  
  const createTodo = title => {
    const nextTodo = [{
      id:uuidv4(),
      title: title,
      completed: false
    }, ...todoList]
    setTodoList(nextTodo)
  }

  const deleteTodo = id => {
    const idx = todoList.findIndex(item => item.id === id)
    const nextTodo = [...todoList]
    nextTodo.splice(idx, 1)
    setTodoList(nextTodo)
    
  }
  
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo
        createTodo={createTodo}
        />
        <SearchBar/>
        <RemainingMessage/>
        <TodoList
        todoList = {todoList}
        deleteTodo = {deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
