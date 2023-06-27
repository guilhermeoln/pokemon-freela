var modal = document.getElementById("myModal");
var pokemonList = document.getElementById("pokemonList");
var span = document.getElementsByClassName("close")[0];

pokemonList.onclick = function (event) {
  var target = event.target;
  if (target.classList.contains("pokemon-item")) {
    var name = target.getAttribute("data-name");
    pokemonName.textContent = name;
  }

  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
