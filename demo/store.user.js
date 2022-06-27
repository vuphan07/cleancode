const { Store } = require("./Store");
class StoreUser extends Store {
  getAllUsers() {
    return this.getAll();
  }

  getUsersActive() {
    return this.getItemsActive();
  }

  getUsersInActive() {
    return this.getItemsInActive();
  }

  checkUserIsExistByEmail = (email) => {
    const user = this.getAllUsers().find((user) => user.email === email);
    if (user) return true;
    return false;
  };

  checkUserIsExistById = (id) => {
    const user = this.getItemById(id);
    if (user) return true;
    return false;
  };

  initUser = (userName, email) => {
    return {
      userName: userName,
      email: email,
    };
  };

  addUser = (userName, email) => {
    const isExistUser = this.checkUserIsExistByEmail(email);
    if (isExistUser) {
      return console.log("user is exist");
    }
    const newUser = this.initUser(userName, email);
    this.createItem(newUser);
    console.log("Created");
  };

  // updateUser = (id, userName) => {
  //   newStore = store.map((user) => {
  //     if (user.id === id) {
  //       user.userName = userName;
  //     }
  //     return user;
  //   });
  //   store = newStore;
  // };

  // deleteUser = (id) => {
  //   newStore = store.map((user) => {
  //     if (user.id === id) {
  //       user.active = "inactive";
  //     }
  //     return user;
  //   });
  //   store = newStore;
  // };
}

const userStore = new StoreUser();

userStore.addUser("phan quang vu", "vu@gmail.com");
console.log(userStore.getAllUsers());
