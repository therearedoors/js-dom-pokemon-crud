import title from './title.js'
import pokemonForm from './pokemon-form.js'
import pokemonList from './pokemon-list.js'

export default function app(element) {
  fetch("http://localhost:3000/pokemons")
    .then(res => res.json())
    .then(pokemons => {

      const titleEl = title()
      const pokemonFormEl = pokemonForm()
      const pokemonListEl = pokemonList(pokemons)

      element.innerHTML = ""
      element.append(titleEl, pokemonFormEl, pokemonListEl)
  })
}
