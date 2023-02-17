// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import TodoList from './Components/Index'
import TodoListOne from './Components/Todo-list/Index';
function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <TodoListOne />
    </div>
  );
}

export default App;
