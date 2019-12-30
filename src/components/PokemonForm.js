import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e)  => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
     })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={e => this.props.handleSubmit(e, this.state)} onReset={this.resetForm} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
            value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"
            value={this.state.front} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"
            value={this.state.back} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
