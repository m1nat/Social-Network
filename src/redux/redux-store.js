import { combineReducers, createStore } from "redux";
import putMesseges from './messege-reducer.js';
import arrayOfUsers from './usersInfo_reducer';


let reducers = combineReducers({
  messeges: putMesseges,
  users: arrayOfUsers
})



const store = createStore(reducers);

export default store;