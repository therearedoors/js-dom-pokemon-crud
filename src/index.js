const pokeForm = document.querySelector(".poke-form");
const pokeList = document.querySelector(".poke-list");

function addPokemon(pokemon) {
  const div = document.createElement("div");
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const btn = document.createElement("button")

  liEl.classList.add("pokemon");
  imgEl.src = pokemon.image;

  h2El.innerText = pokemon.name;

  btn.addEventListener("click", function(){deleteFromDatabase(pokemon.id)})
  btn.innerText = "yeet me"

  liEl.append(imgEl, h2El);
  div.append(liEl, btn)
  pokeList.append(div);
}

function addPokemons(pokemons) {
  pokemons.forEach(pokemon => addPokemon(pokemon))
}

function deleteFromDatabase(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  //.then(res =>  res.json())
  //.then(pokemon => addPokemon(pokemon));
}

function listenToAddPokemonForm() {
  pokeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pokemon = {
      name: pokeForm.name.value,
      image: pokeForm.image.value
    };
    // CREATE
     fetch("http://localhost:3000/pokemon", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(pokemon)
     })
       .then(res =>  res.json())
       .then(pokemon => addPokemon(pokemon));

    //pokeForm.reset();
  });
}

function init() {
  listenToAddPokemonForm();
  // READ
  fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(
      p => {
        addPokemons(p)
      });
}

init();
