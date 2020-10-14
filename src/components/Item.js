import React from 'react';
import './Item.css';

const Item = ({ item, onDone }) => {

  const handleChange = (e) => {
    onDone(item)
  }
  return(
    <div className="input-row">
      <p> {item.task} </p>
      <input type="checkbox" checked={item.isDone} onChange={handleChange} />
    </div>
  );
}
export default Item;