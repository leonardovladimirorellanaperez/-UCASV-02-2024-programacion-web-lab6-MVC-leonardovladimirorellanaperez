const { save, User, getAllUsers } = require('../models/user.model');

const addNewUser = (name, lastname, email) => {
  const newUser = new User(name, lastname, email);
  return save(newUser);
};

const fetchAllUsers = () => {
  try {
    return getAllUsers();
  } catch (error) {
    throw new Error('Error al recuperar los usuarios: ' + error.message);
  }
};

module.exports = {
  addNewUser,
  fetchAllUsers,
};
