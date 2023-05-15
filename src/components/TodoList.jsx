import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
  return (
    <div>
      <TodoItem items={items} />
    </div>
  );
}
