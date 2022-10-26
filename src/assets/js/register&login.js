///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Register&Login.html
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".register-and-login .container");

// Elements that define the Sign-In page
const signInUserInputBtn = document.querySelector(
  ".register-and-login .input-sign-in-username"
);
const signInUserInputLabel = document.querySelector(
  ".register-and-login .label-sign-in-username"
);

const signInPasswordInputBtn = document.querySelector(
  ".register-and-login .input-sign-in-password"
);
const signInPasswordInputLabel = document.querySelector(
  ".register-and-login .label-sign-in-password"
);

// Elements that define the Sign-Up page
const signUpUserInputBtn = document.querySelector(
  ".register-and-login .input-sign-up-username"
);
const signUpUserInputLabel = document.querySelector(
  ".register-and-login .label-sign-up-username"
);

const signUpEmailInputBtn = document.querySelector(
  ".register-and-login .input-sign-up-email"
);
const signUpEmailInputLabel = document.querySelector(
  ".register-and-login .label-sign-up-email"
);

const signUpPasswordInputBtn = document.querySelector(
  ".register-and-login .input-sign-up-password"
);
const signUpPasswordInputLabel = document.querySelector(
  ".register-and-login .label-sign-up-password"
);

// Elements that define the Sign-In & Sign-Up page icon
const signInUserIcon = document.querySelector(
  ".register-and-login .sign-in-link-user"
);
const signInPasswordIcon = document.querySelector(
  ".register-and-login .sign-in-link-password-lock"
);
const signUpUserIcon = document.querySelector(
  ".register-and-login .sign-up-link-user"
);
const signUpPasswordIcon = document.querySelector(
  ".register-and-login .sign-up-link-password-lock"
);
const signUpEmailIcon = document.querySelector(
  ".register-and-login .sign-up-link-email"
);

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  document.title = "Sign Up — HVAR.mall (Hong Kong)";

  // Remove the filling effect of Sign-in
  signInUserInputLabel.classList.remove("active");
  signInUserInputBtn.classList.remove("active");
  signInUserIcon.classList.remove("active");

  signInPasswordInputLabel.classList.remove("active");
  signInPasswordInputBtn.classList.remove("active");
  signInPasswordIcon.classList.remove("active");

  // Remove the fill-in content of Sign-In
  document.getElementById("sign-in-username").value = "";
  document.getElementById("sign-in-password").value = "";
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  document.title = "Sign In — HVAR.mall (Hong Kong)";

  // Remove the filling effect of Sign-Up
  signUpUserInputLabel.classList.remove("active");
  signUpUserInputBtn.classList.remove("active");
  signUpUserIcon.classList.remove("active");

  signUpEmailInputLabel.classList.remove("active");
  signUpEmailInputBtn.classList.remove("active");
  signUpEmailIcon.classList.remove("active");

  signUpPasswordInputLabel.classList.remove("active");
  signUpPasswordInputBtn.classList.remove("active");
  signUpPasswordIcon.classList.remove("active");

  // Remove the fill-in content of Sign-Up
  document.getElementById("sign-up-username").value = "";
  document.getElementById("sign-up-email").value = "";
  document.getElementById("sign-up-password").value = "";
});

// Add the filling effect of Sign-In
signInUserInputBtn.addEventListener("click", () => {
  signInUserInputLabel.classList.add("active");
  signInUserInputBtn.classList.add("active");
  signInUserIcon.classList.add("active");
});

signInPasswordInputBtn.addEventListener("click", () => {
  signInPasswordInputLabel.classList.add("active");
  signInPasswordInputBtn.classList.add("active");
  signInPasswordIcon.classList.add("active");
});

// Add the filling effect of Sign-Up
signUpUserInputBtn.addEventListener("click", () => {
  signUpUserInputLabel.classList.add("active");
  signUpUserInputBtn.classList.add("active");
  signUpUserIcon.classList.add("active");
});

signUpEmailInputBtn.addEventListener("click", () => {
  signUpEmailInputLabel.classList.add("active");
  signUpEmailInputBtn.classList.add("active");
  signUpEmailIcon.classList.add("active");
});

signUpPasswordInputBtn.addEventListener("click", () => {
  signUpPasswordInputLabel.classList.add("active");
  signUpPasswordInputBtn.classList.add("active");
  signUpPasswordIcon.classList.add("active");
});

// Login & Register functions
const mRegistrationForm = document.getElementById("sign-up-form");

const mRegistrationUsername = document.getElementById("sign-up-username");
const mRegistrationEmail = document.getElementById("sign-up-email");
const mRegistrationPassword = document.getElementById("sign-up-password");

const mLoginForm = document.getElementById("sign-in-form");

const mLoginUsername = document.getElementById("sign-in-username");
const mLoginPassword = document.getElementById("sign-in-password");

let registrationErrorCode = 0;
let loginErrorCode = 0;

// Register Form button Listener
mRegistrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const registrationUsername =
    document.getElementById("sign-up-username").value;
  const registrationEmail = document.getElementById("sign-up-email").value;
  const registrationPassword =
    document.getElementById("sign-up-password").value;
  checkRegistration();

  if (registrationErrorCode == 4) {
    const user = {
      registrationUsername: registrationUsername,
      registrationEmail: registrationEmail,
      registrationPassword: registrationPassword,
    };
    const json = JSON.stringify(user);
    localStorage.setItem(registrationUsername, json);
    console.log(registrationErrorCode);
    container.classList.remove("sign-up-mode");
  }
});

// Login Form button Listener
mLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginUsername = document.getElementById("sign-in-username").value;
  const loginPassword = document.getElementById("sign-in-password").value;

  const userInfo = localStorage.getItem(loginUsername);
  const userData = JSON.parse(userInfo) || [];
  const checkUserInfo = localStorage.getItem("admin");
  const checkUserData = JSON.parse(checkUserInfo);
  checkLoginStatus();

  if (loginErrorCode == 3) {
    if (loginUsername != userData.registrationUsername) {
      setErrorFor(mLoginUsername, "Wrong user");
      console.log(checkUserData);
    } else if (
      loginUsername == userData.registrationUsername &&
      loginPassword == userData.registrationPassword
    ) {
      window.location = "../www/index.html";
    } else {
      setErrorFor(mLoginPassword, "Wrong password");
    }
  }
});

// Register Methods
function checkRegistration() {
  const getRegistrationUsernameValue = mRegistrationUsername.value.trim();
  const getRegistrationEmailValue = mRegistrationEmail.value.trim();
  const getRegistrationPasswordValue = mRegistrationPassword.value.trim();

  if (getRegistrationUsernameValue === "") {
    setErrorFor(mRegistrationUsername, "Username cannot blank");
  } else {
    setSuccessFor(mRegistrationUsername);
    registrationErrorCode = 1;
  }

  if (getRegistrationEmailValue === "") {
    setErrorFor(mRegistrationEmail, "Email cannot blank");
  } else if (!isEmail(getRegistrationEmailValue)) {
    setErrorFor(mRegistrationEmail, "Not a valid email");
  } else {
    setSuccessFor(mRegistrationEmail);
    registrationErrorCode = 2;
  }

  if (getRegistrationPasswordValue === "") {
    setErrorFor(mRegistrationPassword, "Password cannot blank");
  } else {
    setSuccessFor(mRegistrationPassword);
    registrationErrorCode = 3;
  }

  if (
    getRegistrationUsernameValue &&
    getRegistrationEmailValue &&
    getRegistrationPasswordValue !== ""
  ) {
    registrationErrorCode = 4;
  }
}

// Login Methods
function checkLoginStatus() {
  const getLoginUsername = mLoginUsername.value.trim();
  const getLoginPassword = mLoginPassword.value.trim();

  if (getLoginUsername === "") {
    setErrorFor(mLoginUsername, "Null user");
  } else {
    setSuccessFor(mLoginUsername);
    loginErrorCode = 1;
  }

  if (getLoginPassword === "") {
    setErrorFor(mLoginPassword, "Null password");
  } else {
    setSuccessFor(mLoginPassword);
    loginErrorCode = 2;
  }

  if (getLoginUsername && getLoginPassword !== "") {
    loginErrorCode = 3;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "input-field error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-field success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
