import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList'
function App() {
  return (
    <div>
      <Header />
    <div className="Todo-List-container">
      <TodoList />
    </div>
    </div>
  );
}

export default App;