import React from 'react';
import TodoItem from './TodoItem';
import './css/TodoList.css';

export default function TodoList({ items, handleCheck, handleDelete }) {
  return (
    <div className='todo_list'>
      {items &&
        items.map((item, index) => (
          <TodoItem
            item={item.item}
            key={index}
            id={item.id}
            checked={item.isChecked}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}
