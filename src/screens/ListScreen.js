import React from 'react';
import Form from '../components/Form';
import Item from '../components/Item';
import { useUpdateList } from '../hooks/updateList';

import './ListScreen.css';

const ListScreen = () => {
  const { list, handleDone, handleCreation } = useUpdateList();

  return(
    <div>
      <div className="form-container">
        <Form setValue={(e) => handleCreation(e)}/>
      </div>
      {
        list.length > 0 ?
        list.map(item => (
          item.isDone ? null :
          <Item item={item} onDone={() => handleDone(item.id)} key={JSON.stringify(item.id)} />
        )) :
        (<p> Agrega tareas </p>)
      }
    </div>
  );
}

export default ListScreen;