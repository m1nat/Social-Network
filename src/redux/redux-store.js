import { combineReducers, createStore } from 'redux';
import putMesseges from './messege-reducer.js';
import arrayOfUsers from './usersInfo_reducer.js';
import showUsers from './suggestions-reducer';

let reducers = combineReducers({
  messeges: putMesseges,
  users: arrayOfUsers,
  usersSubscrip: showUsers
});

const store = createStore(reducers);

window.store = store;

export default store;
