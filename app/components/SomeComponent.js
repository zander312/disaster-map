import React from 'react'
import s from './SomeComponent.scss'
import axios from 'axios'
import { UsaStates } from 'usa-states'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col,
  Panel
} from 'react-bootstrap'

export default class SomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  sendUserData(data) {
    axios
      .post('/dynamo/putuser', {
        Phone: this.state.phone,
        State: this.state.state,
        Address: this.state.address,
        City: this.state.city,
        Zipcode: this.state.zipcode
      })
      .then((res) => {
        console.log(res)
      })
      .then((err) => {
        console.log(err)
      })
  }

  handleChange(e) {
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.sendUserData(this.state)
  }

  render() {
    var usStates = new UsaStates()
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <form
                onSubmit={e => {
                  this.handleSubmit(e)
                }}
              >
                <Panel
                  header="Subscribe to disaster alert list"
                  bsStyle="primary"
                  className={s.panel}
                >
                  <FieldGroup
                    id="formBasicText"
                    label="Phone"
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    placeholder="5718300561"
                    onChange={e => this.handleChange(e)}
                  />
                  <FieldGroup
                    id="formBasicText"
                    label="Street Address"
                    type="text"
                    name="address"
                    value={this.state.address}
                    placeholder="123 Maple Ave"
                    onChange={e => this.handleChange(e)}
                  />
                  <FieldGroup
                    id="formBasicText"
                    label="City"
                    type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="Great Falls"
                    onChange={e => this.handleChange(e)}
                  />
                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl
                      onChange={e => this.handleChange(e)}
                      name="state"
                      componentClass="select"
                      placeholder="select"
                    >
                      {usStates.states.map((state, i) => {
                        return (
                          <option key={i} value={state.abbreviation}>
                            {state.name}
                          </option>
                        )
                      })}
                    </FormControl>
                  </FormGroup>
                  <FieldGroup
                    id="formBasicText"
                    label="Zipcode"
                    type="text"
                    name="zipcode"
                    value={this.state.zipcode}
                    placeholder="22066"
                    onChange={e => this.handleChange(e)}
                  />
                  <Button type="submit">Submit</Button>
                </Panel>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const FieldGroup = ({ id, label, ...rest }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...rest} />
  </FormGroup>
)
