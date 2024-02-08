function addRecommendation() {
  // Get the message of the new recommendation
  const recommendationText = document.getElementById("new_recommendation").value.trim();

  // Validate input to ensure it's not empty or just whitespace
  if (recommendationText) {
    console.log("New recommendation added:", recommendationText);

    // Call showPopup to display a success message
    showPopup(true, "Thanks for leaving a recommendation!");

    // Create a new 'recommendation' element
    const newRecommendation = document.createElement("div");
    newRecommendation.classList.add("recommendation");

    // Escape HTML characters to prevent potential security vulnerabilities
    const escapedText = recommendationText.replace(/([&<>"'\\])/g, escapeChar => {
      const escaped = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
        "\\": "\\\\"
      };
      return escaped[escapedChar] || escapedChar;
    });

    // Add the escaped text to the element
    newRecommendation.innerHTML = `<span>&#8220;</span>${escapedText}<span>&#8221;</span>`;

    // Append the new recommendation to the list
    document.getElementById("all_recommendations").appendChild(newRecommendation);

    // Clear the textarea
    document.getElementById("new_recommendation").value = "";
  } else {
    // Handle empty input gracefully (e.g., display an error message)
    console.error("Please enter a recommendation.");
  }
}

function showPopup(show, message = "") {
  const popup = document.getElementById("popup");
  const popupHeader = document.querySelector(".popup h3"); // Assuming there's an h3 inside the popup

  if (show) {
    popup.style.visibility = "visible";
    if (message) {
      popupHeader.textContent = message;
    }
  } else {
    popup.style.visibility = "hidden";
  }
}
