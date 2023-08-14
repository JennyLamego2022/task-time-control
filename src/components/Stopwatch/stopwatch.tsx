import timeForSecond from "../../common/utils/date";
import Button from "../Button/button";
import Clock from "./Clock/clock";
import style from './stopwatch.module.scss'



export default function Stopwatch() {
    console.log('conversao: ', timeForSecond('01:01:01'))
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