import { createContext , useState} from 'react'
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import RemainingMessage from './components/RemainingMessage';
import TodoList from './components/TodoList';
import './App.css';

const TodoListContext = createContext()

function App() {
  const [todoList,setTodoList] = useState([])
  
  
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <TodoListContext.Provider value={{todoList:todoList,setTodoList:setTodoList}}>
          <AddTodo/>
          <SearchBar/>
          <RemainingMessage/>
          <TodoList/>
        </TodoListContext.Provider>
      </div>
    </div>
  );
}

export default App;
export{ TodoListContext }
