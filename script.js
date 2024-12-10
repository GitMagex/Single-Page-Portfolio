function addRecommendation() {
  // Get the message from the textarea
  let recommendation = document.getElementById("new_recommendation").value.trim();

  // Check if the textarea is not empty
  if (recommendation) {
    console.log("New recommendation added");

    // Create a new 'recommendation' element
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "recommendation");
    newElement.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;

    // Add the new element to the list of recommendations
    document.getElementById("all_recommendations").appendChild(newElement);

    // Reset the textarea
    document.getElementById("new_recommendation").value = "";

    // Show the pop-up confirmation
    showPopup(true);
  } else {
    alert("Please enter a recommendation before submitting.");
  }
}

function showPopup(bool) {
  document.getElementById('popup').style.visibility = bool ? 'visible' : 'hidden';
}

