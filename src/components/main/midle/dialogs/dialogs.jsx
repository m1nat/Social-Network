import DialogItem from "./dialogItem/dialogItem";
import Messege from "./messege/messege";
import s from "./dialogs.module.scss";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((el) => (<DialogItem name={el.name} id={el.id} /> ));
  let messegeElements = props.state.messeges.map((el) => (<Messege name={el.messege} id={el.id} /> ));

  return (
    <div className={s.dialogs}>
      <div className={s.windowOfDialogs}>
        <div className={s.dialogItem}>{dialogElements}</div>
        <div className={s.areaOfDialogs}>{messegeElements}</div>
      </div>
      <div className={s.inputDialogs}>
        <form action="">
          <input
            type="text"
            placeholder="Type a messege..."
            className={s.input}
          />
          <button type="submit" className={s.btnMessege}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;