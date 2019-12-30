import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showBack: false
  }

  handleClick = () => {
    this.setState({showBack: !this.state.showBack})
  }

  render() {

    const backImage = this.props.pokemon.sprites.back
    const frontImage = this.props.pokemon.sprites.front

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.showBack ? backImage : frontImage} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.weight}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
