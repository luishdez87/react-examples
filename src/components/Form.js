import React from 'react';
import { useCreateTask } from '../hooks/createTask';

const Form = ({ setValue }) => {

  const { text, addToList, updateText, handleKeyDown } = useCreateTask({setValue});

  return(
    <div>
      <input type="text" value={text} onKeyDown={handleKeyDown} onChange={updateText.bind(this)} />
      <button onClick={addToList}> Agregar a la lista </button>
    </div>
  );
}
export default Form;