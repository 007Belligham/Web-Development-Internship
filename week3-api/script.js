function getUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      document.getElementById("user").innerText =
        user.name.first + " " + user.name.last;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
