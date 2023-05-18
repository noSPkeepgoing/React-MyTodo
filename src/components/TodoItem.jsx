import React from 'react';
import './css/TodoList.css';

export default function TodoItem({
  item,
  id,
  checked,
  handleCheck,
  handleDelete,
}) {
  const onCheck = (e) => {
    handleCheck(e.target.id, e.target.checked);
  };

  const onDelete = (e) => {
    handleDelete(e.target.previousSibling.childNodes[0].id);
  };

  return (
    <li className='todo_item'>
      <label className='todo_item_input'>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={onCheck}
        ></input>
        <span>{item}</span>
      </label>
      <button className='todo_item_button' onClick={onDelete}>
        X
      </button>
    </li>
  );
}
