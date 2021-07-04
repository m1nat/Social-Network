const ADD_FRIEND = 'ADD_FRIEND';
const REMOVE_FRIEND = 'REMOVE_FRIEND';
const SET_USERS = 'SET_USERS';

initialState = {
  suggestions: {
    usersAvatar: [{}],
    usersSubcrip: [
      { id: 1, fullname: 'Vitaliy', subscrip: false },
      { id: 2, fullname: 'Victoria', subscrip: true },
      { id: 3, fullname: 'Anastasia', subscrip: false },
      { id: 4, fullname: 'Vladislav', subscrip: true },
      { id: 5, fullname: 'Dmitry', subscrip: true }],
    userStatus: [
      { job: 'development', status: 'in vocation', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'doctor', status: 'active', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'none', status: 'busy', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'driver', status: 'don\'t tuch me', location: { country: 'Belarus', city: 'Minsk' } },
      { job: 'none', status: 'active', location: { country: 'Belarus', city: 'Grodno' } },
      { job: 'builder', status: 'in vocation', location: { country: 'Belarus', city: 'Mogilev' } }]
  }
};

const showUsers = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        usersSubcrip: state.usersSubcrip.map(user => {
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
        users: state.usersSubcrip.map(user => {
          if (user.id === active.userID) {
            return { ...user, subscrip: false }
          }
          return user
        })
      }
      break;
    case SET_USERS:
      return { ...state, userName: [...state.usersSubcrip, ...usersSubcrip] };
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