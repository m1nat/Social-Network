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

  let stateCopy;
  switch (action.type) {
    case POST_MESSEGE:
      let newTexts = state.newMessege
      return stateCopy = {
        ...state,
        ask: [...state.ask, { messege: newTexts, id: 3 }],
        newMessege: ''
      }
      break;
    case UPDATE_POST_MESSEGE:
      return stateCopy = {
        ...state,
        newMessege: action.newText
      }
    default:
      return state
      break;
  }
};

export default putMesseges;
export const actionMessegePostCreator = () => ({ type: 'POST-MESSEGE' });
export const actionUpdatePostMessegeCreator = (text) => ({ type: 'UPDATE-POST-MESSEGE', newText: text });
