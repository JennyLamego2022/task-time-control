import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button/button";
import Clock from "./Clock/clock";
import style from './stopwatch.module.scss'
import timeForSecond from "../../common/utils/time";

interface Props {
    selected: ITask | undefined
}

export default function Stopwatch({ selected }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeForSecond(selected.time))
        }
    }, [selected])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo:{time} minutos
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}