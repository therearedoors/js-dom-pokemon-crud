import title from './title.js'
import pokemonForm from './pokemon-form.js'
import pokemonList from './pokemon-list.js'
import state from './state.js'

export default async function app(element) {
  const res = await fetch("http://localhost:3000/pokemons")
  const pokemons = await res.json()
  state.pokemons = pokemons

  element.innerHTML = ""
  const elements = [
    title(),
    pokemonForm(),
    pokemonList()
  ]

  element.append(...elements)
}
