import React from 'react';

export default function TodoFooter({ handleAdd }) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleAdd(e.target[0].value);
    e.target[0].value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'></input>
        <input type='submit' value='ADD'></input>
      </form>
    </div>
  );
}
