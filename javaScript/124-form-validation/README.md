Perfect! Let's begin.

---

# 📘 **Chapter 124: Final Project #4 – Form Validation with Pure JavaScript**

Form validation is one of the most essential front-end skills. Every serious web app must validate user input — both for user experience and security.

In this project, you'll build a **fully validated contact form** that checks user input **in real time** using **vanilla JavaScript**.

---

## 🎯 **What You Will Learn**

* HTML5 form basics & constraints
* Real-time input validation with JavaScript
* Custom error messages
* Regex for pattern matching (email, password)
* Displaying feedback and error styling
* Submit handler for final validation

---

## 📁 **Project Structure**

```
form-validation/
├── index.html
├── style.css
└── script.js
```

---

## 📄 **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Form Validation</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="container">
    <h2>Contact Us</h2>
    <form id="contactForm" novalidate>
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" required />
        <small class="error-message"></small>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="example@domain.com" required />
        <small class="error-message"></small>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Minimum 6 characters" required />
        <small class="error-message"></small>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Type your message..." required></textarea>
        <small class="error-message"></small>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 **style.css**

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
  position: relative;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input.error, textarea.error {
  border-color: red;
}

small.error-message {
  color: red;
  font-size: 0.85rem;
  position: absolute;
  bottom: -1.2rem;
  left: 0;
}

button {
  width: 100%;
  padding: 0.9rem;
  background: #007bff;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
```

---

## 🧠 **script.js**

```javascript
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector('.error-message');
  input.classList.add('error');
  errorMsg.textContent = message;
}

function clearError(input) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector('.error-message');
  input.classList.remove('error');
  errorMsg.textContent = '';
}

function validateName() {
  const name = nameInput.value.trim();
  if (name === '') {
    showError(nameInput, 'Name is required');
    return false;
  }
  clearError(nameInput);
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    showError(emailInput, 'Invalid email address');
    return false;
  }
  clearError(emailInput);
  return true;
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    return false;
  }
  clearError(passwordInput);
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (message === '') {
    showError(messageInput, 'Message is required');
    return false;
  }
  clearError(messageInput);
  return true;
}

// Real-time validation
[nameInput, emailInput, passwordInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    switch (input.id) {
      case 'name': validateName(); break;
      case 'email': validateEmail(); break;
      case 'password': validatePassword(); break;
      case 'message': validateMessage(); break;
    }
  });
});

// Final form submit
form.addEventListener('submit', e => {
  e.preventDefault();

  const isValid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateMessage();

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Please fix the errors in the form.');
  }
});
```

---

## ✅ **Key Concepts Practiced**

* Input validation
* Regex patterns
* Real-time user feedback
* Custom error display
* DOM traversal and manipulation

---

## 🔥 **Bonus Features to Add**

* Show success message after submission
* Disable button during validation
* Save data to `localStorage`
* Send data to fake backend (e.g., [reqres.in](https://reqres.in))
* Accessibility improvements (ARIA, focus)

---

## 💪 **Challenges**

* Add password strength meter
* Validate phone numbers with regex
* Add select box + radio group with validation
* Export to FormData or JSON

---

## 🧪 **Try It Live**

💡 You can test this in:

* [CodePen](https://codepen.io)
* [JSFiddle](https://jsfiddle.net)
* [StackBlitz](https://stackblitz.com)

---

Ready to move forward?

🔜 **Chapter 125: Final Project #5 – Pagination with Pure JavaScript**
In this one, we’ll build a dynamic paginated list from an array (or API), displaying items page-by-page.

Shall we begin Chapter 125?
