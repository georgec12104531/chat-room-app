let users = [];

const addUser = ({ id, name, room }) => {
  console.log("inside add user function", id, name, room);
  // Format the the name and room so the backend
  // receives the same style of string (lowercase without leading/trailing spaces)
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // User is already in the system
  const existingUser = users.find(
    (user) => user.name === name && user.room === room
  );

  if (existingUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  // Remove user, return user removed
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  console.log("users after removed", users);
};

const getUser = (id) => {
  let user = users.find((user) => user.id === id);
  if (user) return user;
};

const getUsersInRoom = (room) => {
  let filtered = users.filter((user) => user.room === room);
  return filtered;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
