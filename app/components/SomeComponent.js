import React from 'react'
import s from './SomeComponent.scss'
import axios from 'axios'
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
    this.state = { animals: '' }
  }

  componentDidMount() {
    axios
      .get('/dynamo/putuser')
      .then(
        function(res) {
          console.log(res)
          this.setState({ animals: res.data.animals })
        }.bind(this)
      )
      .then(function(err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <form>
                <Panel
                  header="input your data"
                  bsStyle="primary"
                  className={s.panel}
                >
                  <FieldGroup
                    id="formBasicText"
                    label="label for input"
                    type="text"
                    value={'oi'}
                    placeholder="Enter text"
                    onChange={console.log('oi')}
                  />
                  <FieldGroup
                    id="formBasicText"
                    label="label for input"
                    type="text"
                    value={'oi'}
                    placeholder="Enter text"
                    onChange={console.log('oi')}
                  />
                  <FieldGroup
                    id="formBasicText"
                    label="label for input"
                    type="text"
                    value={'oi'}
                    placeholder="Enter text"
                    onChange={console.log('oi')}
                  />
                  <FieldGroup
                    id="formBasicText"
                    label="label for input"
                    type="text"
                    value={'oi'}
                    placeholder="Enter text"
                    onChange={console.log('oi')}
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
