import logo from './logo.svg';
import './App.css';
import Weather from './components/weather/weather';
// components
import Header from './components/header';
import TodoList from './components/todo/todolist';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <Weather/>
    </div>
  );
}

export default App;
