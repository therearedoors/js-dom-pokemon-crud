import pokemon from './pokemon.js'

export default function pokemonList(pokemons) {
  const ulEl = document.createElement("ul");
  ulEl.className = "poke-list"

  pokemons.forEach(pokemonData => {
    const pokemonEl = pokemon(pokemonData)
    ulEl.append(pokemonEl)
  })

  return ulEl
}
