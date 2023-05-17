import { useReducer } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import itemsReducer from './reducer/items-reducer';

function App() {
  const [items, dispatch] = useReducer(itemsReducer, [
    { item: 'hi there :)', id: 123, isChecked: false },
  ]);

  const handleAdd = (text) => {
    if (text.trim() !== '') {
      dispatch({ type: 'added', text });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'deleted', id });
  };

  const handleCheck = (id, isChecked) => {
    dispatch({ type: 'checked', id, isChecked });
  };

  return (
    <div>
      <TodoList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <TodoFooter handleAdd={handleAdd} />
    </div>
  );
}

export default App;
