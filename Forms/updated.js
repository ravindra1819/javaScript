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
const pwError = document.getElementById('pwError');
const cpwerror = document.getElementById('cPwError');
const mnuerror = document.getElementById('mNuError');

// Reset error messages
function clearErrors() {
  fnerror.textContent = "";
  lnerror.textContent = "";
  emerror.textContent = "";
  pwError.textContent = "";
  cpwerror.textContent = "";
  mnuerror.textContent = "";
  message.textContent = "";
}
function validatefirstName() {
  if (firstName.value.length < 3) {
    fnerror.textContent = "First name must be at least 3 characters.";
    fnerror.style.color = "red";
  }
  else{
    fnerror.textContent = ''
  }
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

  // First name validation
  if (fname.length < 3) {
    fnerror.textContent = "First name must be at least 3 characters.";
    fnerror.style.color = "red";
    isValid = false;
  }

  // Last name validation
  if (lname.length < 3) {
    lnerror.textContent = "Last name must be at least 3 characters.";
    lnerror.style.color = "red";
    isValid = false;
  }

  // Email validation
  if (!isValidEmail(emailValue)) {
    emerror.textContent = "Please enter a valid email address.";
    emerror.style.color = "red";
    isValid = false;
  }

  // Password validation
  const pwCheck = isValidPassword(passwordValue);
  if (!pwCheck.valid) {
    pwError.textContent = pwCheck.error;
    pwError.style.color = "red";
    isValid = false;
  }

  // Confirm password validation
  if (passwordValue !== cPasswordValue) {
    cpwerror.textContent = "Passwords do not match.";
    cpwerror.style.color = "red";
    isValid = false;
  }

  // Mobile validation
  if (!isMobileValid(mobileValue)) {
    mnuerror.textContent = "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
    mnuerror.style.color = "red";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    message.textContent = "Registration Successful!";
    message.style.color = "green";
    form.reset();
  }
});

// Email validation
function isValidEmail(email) {
  if (!email.includes('@') || !email.includes('.')) return false;
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  if (domain.startsWith('.') || domain.endsWith('.')) return false;
  if (domain.split('.').length < 2) return false;
  return true;
}

// Password validation
function isValidPassword(password) {
  if (password.length < 8 || password.length > 15) {
    return { valid: false, error: 'Password should between 8 to 15 characters.' };
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  const specials = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  for (let char of password) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 'a' && char <= 'z') hasLower = true;
    else if (char >= '0' && char <= '9') hasNumber = true;
    else if (specials.includes(char)) hasSpecial = true;
  }

  if (!hasLower) return { valid: false, error: "Password must contain at least one lowercase letter." };
  if (!hasUpper) return { valid: false, error: "Password must contain at least one uppercase letter." };
  if (!hasNumber) return { valid: false, error: "Password must contain at least one number." };
  if (!hasSpecial) return { valid: false, error: "Password must contain at least one special character." };

  return { valid: true, error: null };
}

// Mobile validation
function isMobileValid(mobileValue) {
  if (mobileValue.length !== 10) return false;
  return ['6', '7', '8', '9'].includes(mobileValue[0]);
}
