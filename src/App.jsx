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
  const [searchText,setSearchText] = useState('')
  const [statusText,setStatusText] = useState('')
  // const [searchTerm,setSearchTerm] = useState({text:(''),status:('')})
  
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

  const updateTodo = (id,value) => {
    const idx = todoList.findIndex(item => item.id === id)
    const nextTodo = [...todoList]
    nextTodo[idx] = {...nextTodo[idx], ...value}
    setTodoList(nextTodo)
  }

  const pendingTodoList = todoList.filter(item => !item.completed)

  const filterTodoList = todoList.filter(
    item => 
    item.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (statusText === '' || item.completed === statusText)
  )

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo
        createTodo={createTodo}
        />
        <SearchBar
        statusText={statusText}
        setStatusText={setStatusText}
        setSearchText={setSearchText}
        searchText={searchText}
        />
        <RemainingMessage
        remaining={pendingTodoList.length}
        total = {todoList.length}
        />
        <TodoList
        todoList = {filterTodoList}
        deleteTodo = {deleteTodo}
        updateTodo = {updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
