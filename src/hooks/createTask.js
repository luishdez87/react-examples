import { useState } from 'react';

export const useCreateTask = ({ setValue }) => {
  const [text, setText] = useState('');

  const addToList = () => {
    setValue(text);
    clearForm();
  }

  const updateText = (event) => {
    setText(event.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setValue(e.target.value);
      clearForm();
    }
  }

  const clearForm = () => {
    setTimeout(() => {
      setText('');
    }, 1);
  }

  return {
    text,
    addToList,
    updateText,
    handleKeyDown
  }
}
