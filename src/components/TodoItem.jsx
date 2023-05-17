import React from 'react';

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
    <li>
      <label>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={onCheck}
        ></input>
        {item}
      </label>
      <button onClick={onDelete}>Del</button>
    </li>
  );
}
