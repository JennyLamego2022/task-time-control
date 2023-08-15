import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button/button";
import Clock from "./Clock/clock";
import style from './stopwatch.module.scss'
import timeForSecond from "../../common/utils/time";

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Stopwatch({ selected, finishTask  }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeForSecond(selected.time))
        }
    }, [selected])

    function regressive(contador: number = 0){
        setTimeout(() => {
            if( contador > 0){
                setTime(contador - 1);
                return regressive(contador -1);
            }
            finishTask();
            
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick ={() => regressive(time) }>Começar!</Button>
        </div>
    )
}