import {useState, useContext, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
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
  const [todoList,setTodoList] = useState([]);
  const [searchText,setSearchText] = useState('')
  const [statusText,setStatusText] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:8080/todos')
    .then(res => {
      setTodoList(res.data.todos)
    }).catch(err => console.log(err))
  },[])
  
  const createTodo = title => {
    
    axios.post('http://localhost:8080/todos', {title: title, completed: false})
    .then(res => {
      const nextTodo = [res.data.todo,...todoList]
      setTodoList(nextTodo)
    })
    .catch(err => console.log(err))
  }
  const deleteTodo = id => {
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then(() => {
      const idx = todoList.findIndex(item => item.id === id)
      const nextTodo = [...todoList]
      nextTodo.splice(idx,1)
      setTodoList(nextTodo)
    })
    .catch(err => console.log(err))
    
  }

  // const deleteTodo = id => {
  //   const idx = todoList.findIndex(item => item.id === id)
  //   const nextTodo = [...todoList]
  //   nextTodo.splice(idx, 1)
  //   setTodoList(nextTodo)
  // }

  const updateTodo = (id, value) => {
    const idx = todoList.findIndex(item => item.id ===  id)
    const nextTodo = [...todoList]
    nextTodo[idx] = {...nextTodo[idx],...value}
    axios.put(`http://localhost:8080/todos/${id}`,nextTodo[idx])
    .then(res => {
      setTodoList(nextTodo)
    })
    
    
  }

  // const updateTodo = (id,value) => {
  //   const idx = todoList.findIndex(item => item.id === id)
  //   const nextTodo = [...todoList]
  //   nextTodo[idx] = {...nextTodo[idx], ...value}
  //   setTodoList(nextTodo)
  // }

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
