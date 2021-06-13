import { rerenderEntireTree } from '../render.js'

let state = {
  users: [
    { name: "Vitaliy Saskevich", position: "Engeener" },
    { name: "Victoria Sinkevich", position: "Doctor" },
    { name: "Irina Sinkevich", position: "Doctor" },
    { name: "Inessa Sinkevich", position: "Doctor" },
    { name: "Vladislav Sinkevich", position: "Driver" },
    { name: "Anastasia Sinkevich", position: "Baby" },
  ],
  newMessege: 'Hello World',
  dialog: [
    { name: "Vitaliy", id: 1 },
    { name: "Victoria", id: 2 },
    { name: "Irina", id: 3 },
    { name: "Inessa", id: 4 },
    { name: "Vladislav", id: 5 },
    { name: "Anastasia", id: 6 },
  ],
  messeges: [
    { messege: "Hi", id: 1 },
    { messege: "How ure you?", id: 2 },
    { messege: "I'm ok :)", id: 3 },
  ],
  ask: [
    { messege: 'Hi! I\'m busy', id: 1 },
    { messege: 'See you soon ;)', id: 2 }
  ]
}

export default state;

export const postMessege = () => {
  let myMesege = {
    messege: state.newMessege,
    id: 3
  }
  state.ask.push(myMesege);
  state.newMessege = '';
  rerenderEntireTree(state);
};

export const getCurrentTextMessege = (newText) => {
  state.newMessege = newText;
  rerenderEntireTree(state);
}
