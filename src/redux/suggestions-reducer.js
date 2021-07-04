const ADD_FRIEND = 'ADD_FRIEND';
const REMOVE_FRIEND = 'REMOVE_FRIEND';
const SET_USERS = 'SET_USERS';

const initialState = {
  usersAvatar: [],
  usersName: [
    { id: 1, fullname: 'Vitaliy Sinkevich', subscrip: false, status: 'in vocation', job: 'development', country: 'Germany', city: 'Hanover' },
    { id: 2, fullname: 'Victoria Sinkevich', subscrip: true, status: 'in vocation', job: 'doctor', country: 'Germany', city: 'Hanover' },
    { id: 3, fullname: 'Anastasia Sinkevich', subscrip: false, status: 'busy', job: 'none', country: 'Germany', city: 'Hanover' },
    { id: 4, fullname: 'Vladislav Neyronskyi', subscrip: true, status: 'don\'t tuch me', job: 'driver', country: 'Belarus', city: 'Minsk' },
    { id: 5, fullname: 'Dmitry Soldatenko', subscrip: true, status: 'in vocation', job: 'builder', country: 'Belarus', city: 'Mogilev' }
  ],
};

const showUsers = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        usersName: state.usersName.map(user => {
          if (user.id === action.userID) {
            return { ...user, subscrip: true }
          }
          return user
        })
      }
      break;
    case REMOVE_FRIEND:
      return {
        ...state,
        usersName: state.usersName.map(user => {
          if (user.id === action.userID) {
            return { ...user, subscrip: false }
          }
          return user
        })
      }
      break;
    case SET_USERS:
      // return { ...state, usersName: [...state.usersName, ...usersName] };
      break;

    default:
      return state
      break;
  }

};

export const addFriendActionCreator = userID => ({ type: 'ADD_FRIEND', userID });
export const removeFriendActionCreator = userID => ({ type: 'REMOVE_FRIEND', userID });
export const setUsers = users => ({ type: 'SET_USERS', users });

export default showUsers;