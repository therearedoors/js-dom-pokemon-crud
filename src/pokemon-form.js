import pokemonList from './pokemon-list.js'

export default function pokemonForm() {
  const formEl = document.createElement("form");
  formEl.classList.add("poke-form");

  const inputNameEl = document.createElement("input");
  inputNameEl.type = "text";
  inputNameEl.name = "name"
  inputNameEl.required = true

  const inputImageEl = document.createElement("input");
  inputImageEl.type = "text";
  inputImageEl.name = "image"
  inputImageEl.required = true

  const inputSubmitEl = document.createElement("input");
  inputSubmitEl.type = "submit";

  formEl.append(inputNameEl, inputImageEl, inputSubmitEl);

  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const pokemon = {
      name: formEl.name.value,
      image: formEl.image.value
    };

    fetch("http://localhost:3000/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
      .then(res =>  res.json())
      .then(data => pokemonList(data))

    formEl.reset();
  })

  return formEl
}
