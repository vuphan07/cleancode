const myStore = () => {
  

  return {
    getStore: () => store,
    create: (userName, email) => {
      const isExistUser = checkUserIsExistByEmail(email);
      if (isExistUser) {
        return console.log("user is exist");
      }
      const newUser = initUser(userName, email);
      addUser(newUser);
      console.log("Created");
    },
    edit: (id, userName) => {
      const isExistUser = checkUserIsExistById(id);
      if (!isExistUser) {
        return console.log("User not found");
      }
      updateUser(id, userName);
      console.log("Created");
    },
    delete: (id) => {
      const isExistUser = checkUserIsExistById(id);
      if (!isExistUser) {
        return console.log("User not found");
      }
      deleteUser(user);
      console.log("Deleted");
    },
  };
};

const store = myStore();

module.exports = {
  store,
};
