import React, { Component } from 'react';
import './style.css';

export default class ListItem extends Component {
  render() {
    return (
      <div className="list">
        <h1 className="item">{this.props.item}</h1>
        <button className="btn-delete" onClick={this.props.delete}>Deletar</button>
      </div>
    )
  }
}