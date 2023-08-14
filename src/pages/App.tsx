import Form from "../components/Form/form";
import List from "../components/List/list";
import Stopwatch from "../components/Stopwatch/stopwatch";
import style from './App.module.scss'

function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Form />
        <List/>
        <Stopwatch/>
      </div>
    </>
  );
}

export default App;
