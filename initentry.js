var theme = document.querySelector("#theme-link");

function userEntry() {
  var darkMode = document.querySelector("#darkMode");
  if (darkMode.checked == false) {
    console.log("User DOES NOT want dark mode!");
    darkModeDisable();
    return;
  }
  darkModeEnable();
}

function closeEntryMessage() {
  document.getElementById("entryMessage").classList.toggle("hidden");
}

function darkModeEnable() {
  theme.href = "dark-mode.css";
}

function darkModeDisable() {
  theme.href = "light-mode.css";
}

function userChoseGuest() {
  const ogGuestSelector = document.getElementById("welcomeUserLogin");
  const newGuestSelector = document.getElementById("guestSettingsSelect");
  ogGuestSelector.classList.toggle("hidden");
}

/* function userEntry() { window.myGlobalVar = "I am global!"; }

userEntry();

console.log(myGlobalVar); // "I am global!" (accessible globally)
*/
