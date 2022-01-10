import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import RemainingMessage from './components/RemainingMessage';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo/>
        <SearchBar/>
        <RemainingMessage/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
