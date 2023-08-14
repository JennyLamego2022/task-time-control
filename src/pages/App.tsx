import { useState } from "react";
import Form from "../components/Form/form";
import List from "../components/List/list";
import Stopwatch from "../components/Stopwatch/stopwatch";
import style from './App.module.scss'
import { ITask } from "../types/task";

function App() {

  const [task, setTask] = useState<ITask[]>([
//     {
//     task: 'React',
//     time: '02:00:00'
// },{
//     task: 'JavaScript',
//     time: '01:00:00'
// }, {
//     task: 'TypeScript',
//     time: '03:00:00'
// }
])

const [select, setSelected] = useState<ITask>();

function selectedTask(selectedTask: ITask){
  setSelected(selectedTask);
  setTask(oldTask => oldTask.map(task => ({
    ...task,
    selected: task.id === selectedTask.id ? true : false
  })))
}

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTask={setTask}/>
        <List 
        task={task}
        selectedTask={selectedTask}
        />
        <Stopwatch  />
      </div>
    </>
  );
}

export default App;
