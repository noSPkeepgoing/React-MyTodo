import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <TodoItem item={item.item} key={item.id} />
      ))}
    </div>
  );
}
