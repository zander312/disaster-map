import React from 'react';
import styles from './SomeComponent.scss';
import logo from '../../assets/1000-secret-lives-cows-1.jpg';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class SomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animals: '' };
  }

  componentDidMount() {
    axios
      .get('/dynamo/putuser')
      .then(
        function(res) {
          console.log(res);
          this.setState({ animals: res.data.animals });
        }.bind(this)
      )
      .then(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}
