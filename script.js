const h2 = document.createElement("h2");
h2.textContent = "Randy Pellegrin";

document.querySelector("body").appendChild(h2);

const input = document.getElementById("button");
input.addEventListener("click", function () {
  alert("I'm Randy, It's nice to meet you");
});
