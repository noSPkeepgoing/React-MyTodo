import React from 'react';

export default function TodoItem({ item, id, checked, handleCheck }) {
  const onCheck = (e) => {
    handleCheck(e.target.id, e.target.checked);
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
    </li>
  );
}
