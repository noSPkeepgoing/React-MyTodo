import React from 'react';

export default function TodoItem({ items }) {
  return (
    <div>
      {items.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}
