// Form in Javascript :

// A form is an HTML element that collects user input. Forms are used to gather data from users, such as text, selections, and files, and submit that data to a server for processing. 
// Forms typically include various input elements like text fields, checkboxes, radio buttons, dropdown menus, and buttons to submit or reset the form.

// Before sending the form data to the server, client-side validation is often performed using JavaScript to ensure that the input meets certain criteria (e.g., required fields are filled, email addresses are in the correct format).

// You can use Javascript for :
// Validation form data before submission
// Prevent invalid data from being sent to the server
// Provide real-time feedback to users
// Enhance user experience by dynamically updating the form based on user input.

const form = document.getElementById('registerForm');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const mobileNumber = document.getElementById('mobileNumber');
const message = document.getElementById('message');


const fnerror = document.getElementById('fnError');
const lnerror = document.getElementById('lnError');
const emerror = document.getElementById('emError');
const pwerror = document.getElementById('pwError');
const cpwerror = document.getElementById('cPwError');
const mnuerror = document.getElementById('mNuError');

// clearing previous message
function clearErrors() {
  fnerror.textContent = "";
  lnerror.textContent = "";
  emerror.textContent = "";
  pwerror.textContent = "";
  cpwerror.textContent = "";
  mnuerror.textContent = "";
  message.textContent = "";
}


// Validation function
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const fname = firstName.value.trim();
  const lname = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cPasswordValue = cPassword.value.trim();
  const mobileValue = mobileNumber.value.trim();

  let isValid = true;

  // // Basic Vaildation
  // if (fname === "" || lname === "" || emailValue === "" || passwordValue === "" || cPasswordValue === "" || mobileValue === "") {
  //   showMessage("Please fill in the require fields", "red");
  // }

  // firstname check
  if (fname.length < 3) {
    fnerror.textContent = "FirstName should not less than 3 letters";
    fnerror.style.color = 'red';
    isValid = false;
  }

  // lastname check
  if (lname.length < 3) {
    lnerror.textContent = "LastName should not less than 3 letters";
    lnerror.style.color = 'red';
    isValid = false;
  }

  // email check
  if (!isValidEmail(emailValue)) {
    emerror.textContent = "Please enter a valid email address";
    emerror.style.color = 'red';
    isValid = false;
  }

  // password check
  const pswdCheck = isValidPassword(passwordValue);
  if (!pswdCheck.valid) {
    pwerror.textContent = pswdCheck.error
    console.log(pswdCheck.error);
    pwerror.style.color = 'red';
    isValid = false;
  }
  // cPassword check
  if (passwordValue !== cPasswordValue) {
    cpwerror.textContent = "Passwords do not match";
    cpwerror.style.color = 'red';
    isValid = false;
  }

  // mobileNum check
  if (!isMobileValid(mobileValue)) {
    mnuerror.textContent = "FirstName should not less than 3 letters";
    mnuerror.style.color = 'red';
    isValid = false;
  }

});

// Helper Function to show Message
if(isValid) {
  message.textContent = "Registration was Successful!";
  message.style.color = "green";
  form.reset();
}

// Email validation without RegEx
function isValidEmail(email) {
  if (!email.includes('@') || !email.includes('.')) return false;
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  if (domain.startsWith('.') || domain.endsWith('.')) return false;
  if (domain.split('.').length < 2) return false;
  // console.log(parts);
  return true;
}

// Password validation without RegEx
function isValidPassword(password) {
  if (password.length < 8 || password.length > 15) {
    return { valid: false, error: 'Password should be 8 - 15 characters long' };
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  const specials = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  for (let char of password) {
    if (char >= 'A' || char <= 'Z') hasUpper = true;
    else if (char >= 'a' || char <= 'z') hasLower = true;
    else if (char >= '0' || char <= '9') hasNumber = true;
    else if (specials.includes(char)) hasSpecial = true;
  }

  if (!hasLower) return { valid: false, error: "Password must contain atleast one lowercase letter" };
  if (!hasUpper) return { valid: false, error: "Password must contain atleast one uppercase letter" };
  if (!hasNumber) return { valid: false, error: "password must contain atleast one number" };
  if (!hasSpecial) return { valid: false, error: "password must contain atleast one special character" };

  return { valid: true, error: null };
}

// mobileNumber validation without Regex
function isMobileValid(mobileNumber) {
  if (mobileValue.length !== 10) return false;
  return ['6', '7', '8', '9'].includes(mobileValue[0]);
}                                              