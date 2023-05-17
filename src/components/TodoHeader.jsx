import React from 'react';

export default function TodoHeader({ handleFilter }) {
  const onClick = (e) => {
    handleFilter(e.target.name);
  };
  return (
    <div>
      <button name='all' onClick={onClick}>
        All
      </button>
      <button name='todo' onClick={onClick}>
        ToDo
      </button>
      <button name='done' onClick={onClick}>
        Done
      </button>
    </div>
  );
}
