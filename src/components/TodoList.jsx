import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ items, handleCheck, handleDelete }) {
  return (
    <div>
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
