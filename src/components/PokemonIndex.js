import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokeUrl = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: []
  }

  componentDidMount() {
    fetch(pokeUrl)
    .then(resp => resp.json())
    .then(pokeData => this.setState({pokemon: pokeData}))
  }

  filterPokemon = e => {
    let name = e.target.value
    let filteredPokemon = this.state.pokemon.filter(poke => poke.name.toLowerCase().includes(name))
    this.setState({ filteredPokemon })
  }

  handleSubmit = (e, poke) => {
    e.preventDefault()
    this.postNewPoke(poke)
    let form = e.target
    form.reset()
  }

  postNewPoke = (poke) => {
    fetch(pokeUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: poke.name,
        weight: poke.hp,
        sprites: {
          front: poke.frontUrl,
          back: poke.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokeData => this.setState({pokemon: [pokeData, ...this.state.pokemon]}))
    .then(console.log(`${poke.name} was added successfully!`))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onSearch={this.filterPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon.length > 0 ? this.state.filteredPokemon : this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
