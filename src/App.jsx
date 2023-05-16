import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (text) => {
    if (text.trim() !== '') {
      setItems([...items, { item: text, id: Date.now(), checked: false }]);
    }
  };

  const handleCheck = (id, isChecked) => {
    setItems(
      items.map((item) =>
        item.id == id ? { ...item, checked: isChecked } : item
      )
    );
  };

  return (
    <div>
      <TodoList items={items} handleCheck={handleCheck} />
      <TodoFooter handleAdd={handleAdd} />
    </div>
  );
}

export default App;
