import React, { ReactNode } from "react";
import style from './button.module.scss'


interface ButtonProps  {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}
class Button extends React.Component <ButtonProps> {
  render() {
    //CSS inline no html
    // const estaAtivo = false;
    // const styles = {
    //     backgroundColor: estaAtivo ? 'green' : 'red' 
    // }
    //cria uma constante booleana 
    //le-se: se esta ativo, (como nao tem como usar o if, pq estamos em um objeto, usa-se o ternario '?') bg green, senao (:) bg red.
    //uma forma de criar o inline style no html
    const {type = "button"} = this.props;
    return (
    <button type={type} className={style.botao}>
        {this.props.children}
    </button>);
  }
}

export default Button;
