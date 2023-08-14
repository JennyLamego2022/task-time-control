import { useState } from 'react';
import Item from './Item/item';
import style from './list.module.scss'

function List() {
    const [task, setTask] = useState([{
      task: 'React',
      time: '02:00:00'
  },{
      task: 'JavaScript',
      time: '01:00:00'
  }, {
      task: 'TypeScript',
      time: '03:00:00'
  }])

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() =>{
        setTask([...task, {task: "Estudar estado", time: "05:00:00"}])
      }}>Tarefas do dia</h2>
      <ul>
        {task.map((item, index) => (
          <Item
          key={index}
           {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
