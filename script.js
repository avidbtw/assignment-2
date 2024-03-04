document.addEventListener("DOMContentLoaded", function () {
  // Define an array of phrases for password creation requirements
  const phrases = [
      "* At least 1 lowercase character",
      "* At least 1 uppercase character",
      "* At least 1 number",
      "* At least 1 special character",
      "* Contain 1 day of the week",
      "* Contain your birthday",
      "* Contain your dog's name",
      "* Contain your favorite color",
      "* Contain 1 emoji in a skin color different from yours",
      "* At least one parent's name",
      "* Contain our current moon cycle",
      "* Contain the month 6 months from now",
      "* Contain a family recipe",
      "* Contain your social insurance number",
      "* Contain the 3 numbers on the back of your parent's credit card",
      "* Contain January 31st wordle",
      "* Contain your current address",
      "* Must be less than 6 characters"
  ];

  // Start at the current index at zero
  let currentIndex = 0;

  // Select the errorMessage div for password creation requirements
  const errorMessageDiv = document.querySelector(".errorMessage");

  // Function to display the next phrase from the phrases array
  function displayNextPhrase() {
      // Create a new list item
      if (currentIndex < phrases.length) {
          const listItem = document.createElement("ol");
          // Set the text content of the list item to the current phrase
          listItem.textContent = phrases[currentIndex];
          // Append the new list item to the errorMessageDiv
          errorMessageDiv.appendChild(listItem);

          // Increase index to move to the next phrase
          currentIndex++;
      } else {
          // If currentIndex exceeds the length of phrases, show the "Deleted Account" section
          document.getElementById("deletedacc").style.display = "block";
          // Hide the password form
          document.getElementById("passwordForm").style.display = "none";
      }
  }

  // Function to handle the login action
  function login() {
      // Hide the login form
      document.getElementById("loginForm").style.display = "none";
      // Show the password change form
      document.getElementById("passwordForm").style.display = "block";

      // Display the first phrase
      displayNextPhrase();
  }

  // Function to handle returning home
  function returnHome() {
      // Reload the page or perform other actions to return home
      window.location.reload();
  }

  // Add functions to the window object
  window.login = login;
  window.returnHome = returnHome;
});

