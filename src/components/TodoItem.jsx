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
      <input id={id} type='checkbox' checked={checked} onChange={onCheck} />
      <label className='todo_item_input' for={id}>
        <span className={checked ? 'todo_item_done' : ''}>{item}</span>
      </label>
      <button className='todo_item_button' onClick={onDelete}>
        ✘
      </button>
    </li>
  );
}
