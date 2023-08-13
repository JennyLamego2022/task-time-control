import Form from "../components/Form/form";
import List from "../components/List/list";
import style from './App.module.scss'

function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Form />
        <List/>
      </div>
    </>
  );
}

export default App;
