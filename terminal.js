const showMenuOption = () => {
  console.log("1. Add user\n");
  console.log("2. Edit user\n");
  console.log("3. Delete user\n");
  console.log("4. view store\n");
  console.log("5. Exit programm\n");
};

const clearTerminal = () => {
  console.clear();
};

module.exports = {
    showMenuOption: showMenuOption,
    clearTerminal: clearTerminal
}