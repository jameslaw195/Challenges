console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

function showWelcomeMessage(username) {
  console.log("Welcome " + username + " you are logged in now.");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((username) => {
  console.log("Welcome " + username + " you are logged in now.");
});

// The exercise starts here!
