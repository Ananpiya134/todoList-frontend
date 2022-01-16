import {v4 as uuidv4} from 'uuid'
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import RemainingMessage from './components/RemainingMessage';
import TodoList from './components/TodoList';
import './App.css';
import TodoListContextProvider from './contexts/TodoListContext';


function App() {
  
  
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
      <TodoListContextProvider>
        <AddTodo/>
        <SearchBar/>
        <RemainingMessage/>
        <TodoList/>
      </TodoListContextProvider>

      </div>
    </div>
  );
}

export default App;

