import React from "react";
import Button from "../Button/button";
import style from './form.module.scss'

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form action="" className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="task"
            id="task"
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
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div >
        <Button />
      </form>
    );
  }
}

export default Form;
