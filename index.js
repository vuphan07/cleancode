const { store } = require("./store");
const { clearTerminal, showMenuOption } = require("./terminal");
const prompt = require("prompt-sync")();
const TIME_REFRESH = 1000;

const refreshTerminal = () => {
  setTimeout(() => {
    clearTerminal();
    showMenuOption();
  }, TIME_REFRESH);
};

showMenuOption();

process.stdin.on("data", function (input) {
  const state = parseInt(input, 10);
  clearTerminal();
  switch (state) {
    case 1:
      console.log("\nNhập username:\n");
      let userName = prompt(""); // get username from input username
      console.log("\nNhập email:\n");
      let email = prompt(""); // get email from input email
      store.addUser(userName, email);
      refreshTerminal();
      break;
    case 2:
      clearTerminal();
      break;
    case 3:
      clearTerminal();
      break;
    case 4:
      console.log(store.getStore());
      refreshTerminal();
      break;
    case 5:
      refreshTerminal();
      process.exit(0);
      break;
  }
});
