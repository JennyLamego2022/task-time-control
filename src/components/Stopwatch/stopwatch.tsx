import Button from "../Button/button";
import Clock from "./Clock/clock";
import style from './stopwatch.module.scss'



export default function Stopwatch() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}