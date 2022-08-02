import React from 'react';
import '../components/style.css';

const InputFields = () => {
  return (
    <form className="input">
        <input type="input" className="input__box" placeholder="Enter a task"/>
        <button className="input_submit">Go</button>
    </form>
  )
}

export default InputFields
