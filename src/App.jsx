import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  const dummy = ['item1', 'item2', 'item3'];
  return (
    <div>
      <TodoList items={dummy} />
    </div>
  );
}

export default App;
