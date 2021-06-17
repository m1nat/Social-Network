import { actionMessegePostCreator, actionUpdatePostMessegeCreator } from '../../../../redux/state.js'
import DialogItem from "./dialogItem/dialogItem";
import Ask from './ask/ask.jsx';
import Messege from "./messege/messege";
import s from "./dialogs.module.scss";
import React from "react";

const Dialogs = props => {

  let dialogElements = props.dialog.map((el) => (
    <DialogItem name={ el.name } id={ el.id } />
  ));

  let answer = props.messeges.map( el => (
    <Messege name={ el.messege } id={ el.id } />
  ));

  let postAsk = props.ask.map(el => (
    <Ask asks={ el.messege } />
  ));

  const inputValue = React.createRef();

  const putMessege = () => {
    props.dispatch(actionMessegePostCreator());
  };

  const putOnchange = () => {
    let text = inputValue.current.value;
    props.dispatch(actionUpdatePostMessegeCreator(text));
  };

  return (
    <div className={ s.dialogs }>
      <div className={ s.windowOfDialogs }>
        <div className={ s.dialogItem }>{ dialogElements }</div>
        <div className={ s.areaOfDialogs }>
          {answer}
          {postAsk}
        </div>
      </div>
      <div className={ s.inputDialogs }>
        <form action="">
          <input
            type="text"
            placeholder="Type a messege..."
            className={ s.input }
            ref={ inputValue }
            value={ props.newMessege }
            onChange={ putOnchange }
          />
          <button type="button" className={ s.btnMessege } onClick={ putMessege } >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dialogs;
