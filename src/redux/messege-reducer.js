const POST_MESSEGE = 'POST-MESSEGE';
const UPDATE_POST_MESSEGE = 'UPDATE-POST-MESSEGE';

const initialState = {
  answer: [
    { messege: "Hi", id: 1 },
    { messege: "How ure you?", id: 2 },
    { messege: "I'm ok :)", id: 3 },
  ],
  ask: [
    { messege: 'Hi! I\'m busy', id: 1 },
    { messege: 'See you soon ;)', id: 2 }
  ],
  newMessege: '',
}

const putMesseges = (state = initialState, action) => {
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


export default putMesseges;
export const actionMessegePostCreator = () => ({ type: 'POST-MESSEGE' });
export const actionUpdatePostMessegeCreator = (text) => ({ type: 'UPDATE-POST-MESSEGE', newText: text });
