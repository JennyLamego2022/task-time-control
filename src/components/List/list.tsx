import { ITask } from '../../types/task';
import Item from './Item/item';
import style from './list.module.scss'

interface Props {
  task: ITask[],
  selectedTask: (selectedTask: ITask) => void
}

function List({task, selectedTask}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {task.map((item) => (
          <Item
          selectedTask={selectedTask}
          key={item.id}
           {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
