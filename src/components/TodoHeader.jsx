import React from 'react';
import './css/TodoHeader.css';

export default function TodoHeader({ handleFilter }) {
  const onClick = (e) => {
    handleFilter(e.target, e.target.name);
  };
  return (
    <div className='filter'>
      <button name='all' className='filter_button active' onClick={onClick}>
        All
      </button>
      <button name='todo' className='filter_button' onClick={onClick}>
        ToDo
      </button>
      <button name='done' className='filter_button' onClick={onClick}>
        Done
      </button>
    </div>
  );
}
