import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    if (item.trim() != '') {
      setItems([...items, { item: item, id: Date.now() }]);
    }
  };
  return (
    <div>
      <TodoList items={items} />
      <TodoFooter handleAdd={handleAdd} />
    </div>
  );
}

export default App;
