// Get button and card from HTML //
const button = document.getElementById("loadUserBtn");
const userCard = document.getElementById("userCard");

// Run function when button is clicked//
button.addEventListener("click", loadUser);

function loadUser() {
  // Show loading text
  userCard.innerHTML = "Loading...";

  // Fetch data from API
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      // Display user data //
      userCard.innerHTML = `
    <h3>${user.name.first} ${user.name.last}<h3>
    <p>Email: ${user.email}<p>
    <p>Country: ${user.location.country}<p>
   `;
    })
    .catch((error) => {
      userCard.innerHTML = "Error loading user";
    });
}
