 
const initialArrayOfUsers = {
  userInfo: [
    { name: "Vitaliy Saskevich", position: "Engeener" },
    { name: "Victoria Sinkevich", position: "Doctor" },
    { name: "Irina Sinkevich", position: "Doctor" },
    { name: "Inessa Sinkevich", position: "Doctor" },
    { name: "Vladislav Sinkevich", position: "Driver" },
    { name: "Anastasia Sinkevich", position: "Baby" },
  ],
  usersDialog: [
    { name: "Vitaliy", id: 1 },
    { name: "Victoria", id: 2 },
    { name: "Irina", id: 3 },
    { name: "Inessa", id: 4 },
    { name: "Vladislav", id: 5 },
    { name: "Anastasia", id: 6 },
  ],
}; 

const arrayOfUsers = (state = initialArrayOfUsers, action) => {

  return state
} 

export default arrayOfUsers;