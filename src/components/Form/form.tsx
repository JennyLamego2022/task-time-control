import React from "react";
import Button from "../Button/button";
import style from './form.module.scss'
import { ITask } from "../../types/task";

class Form extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

  state = {
    task: "",
    time: "00:00"
  }

  addTask(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTask(oldTask => [...oldTask, {...this.state}])
  }

  render(): React.ReactNode {
    return (
      <form action="" className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="task"
            id="task"
            value = {this.state.task}
            onChange={evento => this.setState({...this.state, task: evento.target.value})}
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
            value = {this.state.time}
            onChange={evento => this.setState({...this.state, time: evento.target.value})}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div >
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
