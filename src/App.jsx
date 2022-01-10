import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo/>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
