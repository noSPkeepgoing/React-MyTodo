import { useReducer, useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import itemsReducer from './reducer/items-reducer';

function App() {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [show, setShow] = useState('all');

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

  const handleFilter = (target, filter) => {
    setShow(filter);
    target.classList.add('active');

    [...target.parentNode.childNodes]
      .filter((node) => node.name !== filter)
      .map((node) => node.classList.remove('active'));
  };

  return (
    <div className='todo'>
      <TodoHeader handleFilter={handleFilter} />
      <TodoList
        items={
          show === 'all'
            ? items
            : show === 'todo'
            ? items.filter((i) => !i.isChecked)
            : items.filter((i) => i.isChecked)
        }
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <TodoFooter handleAdd={handleAdd} />
    </div>
  );
}

export default App;
