import React, { useState } from "react";
import Button from "../Button/button";
import style from './form.module.scss'
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid"

interface Props{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTask} : Props){
  const [task, setTaskState] = useState("")
  const [time, setTime] = useState("00:00")

  function addTask(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    setTask(oldTask => 
      [
        ...oldTask,
        {
          task,
          time,
          selected:false,
          completed:false, 
          id:uuidv4()
        }
      ]
    );
      setTaskState('');
      setTime("00:00");
  }
  return(
    <form action="" className={style.novaTarefa} onSubmit={addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="task"
            id="task"
            value = {task}
            onChange={evento => setTaskState(evento.target.value)}
            placeholder="Qual tarefa vai executar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            value = {time}
            onChange={evento => setTime(evento.target.value)}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div >
        <Button type="submit">Adicionar</Button>
      </form>
  )
}

export default Form;
