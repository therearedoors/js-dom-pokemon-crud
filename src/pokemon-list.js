import pokemon from './pokemon.js'
import state from './pokemon-list-state.js'

export default function pokemonList() {
  const ulEl = document.createElement("ul");
  ulEl.className = "poke-list"

  state.pokemons.forEach(pokemonData => {
    const pokemonEl = pokemon(pokemonData)
    ulEl.append(pokemonEl)
  })

  return ulEl
}
