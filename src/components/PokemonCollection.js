import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    const pokemon = this.props.pokemon.map(poke => <PokemonCard key ={poke.id} pokemon={poke} />)

    return (
      <Card.Group itemsPerRow={6}>
        {pokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
