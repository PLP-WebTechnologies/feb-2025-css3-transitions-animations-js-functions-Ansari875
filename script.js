<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations and Local Storage</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Welcome to Dynamic Animation & Local Storage Example</h1>

  <!-- Button to trigger animation -->
  <button id="animateButton">Click me to change theme</button>

  <script>
    // JavaScript to handle localStorage and animation
    const button = document.getElementById('animateButton');

    // Function to store user preference in localStorage
    function storePreference(theme) {
      localStorage.setItem('userTheme', theme);
    }

    // Function to retrieve user preference from localStorage
    function getStoredPreference() {
      return localStorage.getItem('userTheme');
    }

    // Function to trigger animation
    function applyAnimation() {
      // Retrieve stored theme from localStorage and apply it
      const savedTheme = getStoredPreference();
      if (savedTheme === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        button.style.backgroundColor = '#555';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        button.style.backgroundColor = '#4CAF50';
      }

      // Trigger CSS animation on the button when clicked
      button.classList.add('animate');
    }

    // Event listener to change theme and apply animation on button click
    button.addEventListener('click', () => {
      // Toggle theme between dark and light
      const currentTheme = getStoredPreference();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      storePreference(newTheme);

      // Apply the animation and theme change
      applyAnimation();
    });

    // Apply the initial theme on page load based on localStorage
    if (getStoredPreference()) {
      applyAnimation();
    }
  </script>
</body>
</html>
