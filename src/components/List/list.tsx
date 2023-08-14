import { ITask } from '../../types/task';
import Item from './Item/item';
import style from './list.module.scss'


function List({task}:{task: ITask[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
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
