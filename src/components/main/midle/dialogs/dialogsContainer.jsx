import { actionMessegePostCreator, actionUpdatePostMessegeCreator } from '../../../../redux/messege-reducer.js'
import React from "react";
import Dialogs from './dialogs.jsx';

const DialogsContainer = props => {

  const inputValue = React.createRef();

  const putMessege = () => {
    props.dispatch(actionMessegePostCreator());
  };

  const putOnchange = (text) => {
    props.dispatch(actionUpdatePostMessegeCreator(text));
  };

  return (
    <Dialogs 
    updateCurrentText={ putOnchange } 
    createNewMessege={ putMessege } 
    dialog={props.dialog} 
    messeges={props.messeges}
    ask={props.ask}
    />
    
  );
}

export default DialogsContainer;