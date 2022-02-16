const pokeForm = document.querySelector(".poke-form");
const pokeList = document.querySelector(".poke-list");

function addPokemon(pokemon) {
  const div = document.createElement("div");
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const btnDiv = document.createElement("div")
  const delBtn = document.createElement("button")
  const likeBtn = document.createElement("button")

  liEl.classList.add("pokemon");
  imgEl.src = pokemon.image;

  h2El.innerText = pokemon.name;

  delBtn.addEventListener("click", function(){deleteFromDatabase(pokemon.id)})
  delBtn.innerText = "delete"

  likeBtn.innerText = "like"
  likeBtn.addEventListener("click", function(){like(pokemon.id,pokemon.liked)})
  if (pokemon.liked) likeBtn.classList.add("liked")


  liEl.append(imgEl, h2El);
  btnDiv.append(delBtn,likeBtn)
  div.append(liEl, btnDiv)
  pokeList.append(div);
}

function addPokemons(pokemons) {
  pokemons.forEach(pokemon => addPokemon(pokemon))
}

function deleteFromDatabase(id){
  //DELETE
  fetch(`http://localhost:3000/pokemons/`+id, {
    method: "DELETE"
  })
}

function like(id,isLiked){
  //UPDATE
  fetch(`http://localhost:3000/pokemons/`+id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"liked": !isLiked})
  })
}

function listenToAddPokemonForm() {
  pokeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pokemon = {
      name: pokeForm.name.value,
      image: pokeForm.image.value,
      liked: false
    };
    //CREATE
     fetch("http://localhost:3000/pokemons", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(pokemon)
     })
       .then(res =>  res.json())
       .then(pokemon => addPokemon(pokemon));

    pokeForm.reset();
  });
}

function init() {
  listenToAddPokemonForm();
  // READ
  fetch("http://localhost:3000/pokemons")
    .then(res => res.json())
    .then(
      p => {
        addPokemons(p)
      });
}

init();