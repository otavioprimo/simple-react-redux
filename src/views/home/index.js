import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLabel } from '../../actions';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value });
  }

  resetInput() {
    this.setState({ inputValue: '' });
  }

  render() {
    const { addLabel, message } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="container">
        <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
          placeholder="Digite a descrição"
        />

        <div className="container-btns">
          <button className="btn btn-add" onClick={() => { addLabel(inputValue); this.resetInput() }}>Adicionar!</button>

          <Link to="/items">
            <button className="btn btn-go">Ver lista</button>
          </Link>
        </div>

        <h1 className="message">{message}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  message: store.clickState.message,
  labels: store.clickState.labels
});

const mapDispatchToProps = dispatch => bindActionCreators({ addLabel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
