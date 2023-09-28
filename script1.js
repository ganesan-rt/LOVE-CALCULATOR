// Wait for the page to load before attaching event listeners
window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
  }
  
  function calculateLove() {
    // Get the input values
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;
  
    // Check if both input fields are not empty
    if (yourName !== "" && crushName !== "") {
      // Generate a random percentage between 0 and 100
      let percentage = Math.floor(Math.random() * 101); // Random number between 0 and 100
  
      // Display the result message and percentage
      let resultMessage = yourName + " and " + crushName + "'s chance of love is:";
      document.getElementById("result-message").innerText = resultMessage;
      document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    } else {
      // Handle the case where one or both input fields are empty
      alert("Please enter both your name and your crush's name.");
    }
  }