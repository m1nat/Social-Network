const store = {
  _state: {
    users: [
      { name: "Vitaliy Saskevich", position: "Engeener" },
      { name: "Victoria Sinkevich", position: "Doctor" },
      { name: "Irina Sinkevich", position: "Doctor" },
      { name: "Inessa Sinkevich", position: "Doctor" },
      { name: "Vladislav Sinkevich", position: "Driver" },
      { name: "Anastasia Sinkevich", position: "Baby" },
    ],
    newMessege: '',
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
  },
  getState() {
    return this._state
  },
  callSubscriber() {
  },
  postMessege() {
    let myMesege = {
      messege: this._state.newMessege,
      id: 3
    }
    this._state.ask.push(myMesege);
    this._state.newMessege = '';
    this.callSubscriber(this._state);
  },
  getCurrentTextMessege(newText) {
    this._state.newMessege = newText;
    this.callSubscriber(this._state);
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  }
}


export default store;






