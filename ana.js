document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  let valid = true;

  // Email Validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Age Validation
  const age = document.getElementById('age').value;
  const ageError = document.getElementById('ageError');
  if (isNaN(age) || age < 18 || age > 99) {
    ageError.textContent = 'Age must be a number between 18 and 99.';
    valid = false;
  } else {
    ageError.textContent = '';
  }

  // Message Validation
  const message = document.getElementById('message').value.trim();
  const messageError = document.getElementById('messageError');
  const words = message.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const charCount = message.length;

  if (wordCount > 100) {
    messageError.textContent = 'Message cannot exceed 100 words.';
    valid = false;
  } else if (charCount > 5000) {
    messageError.textContent = 'Message cannot exceed 5000 characters.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
    this.submit();
  }
});

// Live Word and Character Count
document.getElementById('message').addEventListener('input', function() {
  const message = this.value.trim();
  const words = message.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const charCount = message.length;

  document.getElementById('wordCount').textContent = `Word Count: ${wordCount}/100`;
  document.getElementById('charCount').textContent = `Character Count: ${charCount}/5000`;
});
