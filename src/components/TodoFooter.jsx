import React from 'react';
import './css/TodoFooter.css';

export default function TodoFooter({ handleAdd }) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleAdd(e.target[0].value);
    e.target[0].value = '';
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input type='text' className='form_text'></input>
      <input type='submit' value='ADD' className='form_button'></input>
    </form>
  );
}
