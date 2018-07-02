import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { XComponentOne, XComponentTwo } from '../../components/XComponent'

class XPageTwo extends Component {
  state = {
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <Link to={"/"}>
        <strong>Go to XPageOne</strong>
      </Link>
      <XComponentOne array={this.state.array} string={this.state.string} />
      <XComponentTwo array={this.state.array} string={this.state.string} />
    </div>);
  }
}

export default XPageTwo;
