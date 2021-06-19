const POST_MESSEGE = 'POST-MESSEGE';
const UPDATE_POST_MESSEGE = 'UPDATE-POST-MESSEGE';

export const putMesseges = (state, action) => {
  switch (action.type) {
    case POST_MESSEGE:
      let myMesege = {
        messege: state.newMessege,
        id: 3
      }
      state.ask.push(myMesege);
      state.newMessege = '';
      return state
      break;
    case UPDATE_POST_MESSEGE:
      state.newMessege = action.newText;
      return state
    default:
      return state
      break;
  }
};

export const actionMessegePostCreator = () => ({ type: 'POST-MESSEGE' });
export const actionUpdatePostMessegeCreator = (text) => ({ type: 'UPDATE-POST-MESSEGE', newText: text });