import React, { useState } from 'react';

export const useUpdateList = () => {
  const [list, setList] = useState([]);

  const handleCreation = (event) => {
    if (event !== '') {
      const item = {
        task: event,
        isDone: false,
        id: Date.now()
      }
      setList([item, ...list]);
    }
  }

  const handleDone = (id) => {
    setList(list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone
        };
      } else {
        return item;
      }
    }))
  }

  return {
    list,
    handleCreation,
    handleDone
  }
} 