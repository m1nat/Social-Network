import { connect } from 'react-redux';
import { actionMessegePostCreator, actionUpdatePostMessegeCreator } from '../../../../redux/messege-reducer.js'
import Dialogs from './dialogs.jsx';


const mapStateToProps = (state) => {
  return {
    dialog: state.users.usersDialog,
    messeges: state.messeges.answer,
    ask: state.messeges.ask,
    newMessege: state.messeges.newMessege
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMessege: () => {
      dispatch(actionMessegePostCreator())
    },
    updateCurrentText: (text) => {
      dispatch(actionUpdatePostMessegeCreator(text))
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;