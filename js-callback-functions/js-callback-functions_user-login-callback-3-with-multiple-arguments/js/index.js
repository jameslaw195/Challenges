console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName} you are now logged in as ${userRole}.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName} you are now logged in as ${userRole}.`);
});
// The exercise starts here!
