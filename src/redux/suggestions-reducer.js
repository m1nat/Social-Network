const ADD_FRIEND = 'ADD_FRIEND';
const REMOVE_FRIEND = 'REMOVE_FRIEND';

initialState = {
  suggestions: {
    usersAvatar: [{}],
    userName: [
      { id: 1, fullname: 'Vitaliy', subscrip: false },
      { id: 2, fullname: 'Victoria', subscrip: true },
      { id: 3, fullname: 'Anastasia', subscrip: false },
      { id: 4, fullname: 'Vladislav', subscrip: true },
      { id: 5, fullname: 'Dmitry', subscrip: true }],
    userInfo: [
      { job: 'development', status: 'in vocation', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'doctor', status: 'active', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'none', status: 'busy', location: { country: 'Belarus', city: 'Gomel' } },
      { job: 'driver', status: 'don\'t tuch me', location: { country: 'Belarus', city: 'Minsk' } },
      { job: 'none', status: 'active', location: { country: 'Belarus', city: 'Grodno' } },
      { job: 'bilder', status: 'in vocation', location: { country: 'Belarus', city: 'Mogilev' } }]
  }
};

const showUsers = (state = initialState, action) => {

  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        userName: state.userName.map( user => {
          if(user.id === action.userID) {
            return {...user, subscrip: true}
          }
          return user
        })
      }
      break;
    case REMOVE_FRIEND:
      return {
        ...state,
        userName: state.userName.map( user => {
          if(user.id === active.userID) {
            return {...user, subscrip: false }
          }
          return user
        })
      }
      break;

    default:
      return state
      break;
  }

};

export const addFriendActionCreator = userID => ({ type: 'REMOVE_FRIEND', userID });
export const removeFriendActionCreator = userID => ({ type: 'REMOVE_FRIEND', userID })

export default showUsers;