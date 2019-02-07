import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { deleteLabel } from '../../actions';
import './style.css';

import ListItem from '../../components/ListItem';

class Items extends Component {

  render() {
    const { deleteLabel, labels } = this.props;

    let renderItems = (
      labels.map((el, index) => <ListItem delete={() => deleteLabel(index)} key={index} item={el} />)
    );

    let noItems = (
      <p className="no-items">Adicione itens primeiro!</p>
    );

    return (
      <div className="container">
        <Link to="/" className="link">
          <button className="btn-back">Back</button>
        </Link>

        {
          labels.length == 0 ?
            noItems : <div className="container-list">{renderItems}</div>
        }

      </div>
    );
  }
}

const mapStateToProps = store => ({
  labels: store.clickState.labels
});

const mapDispatchToProps = dispatch => bindActionCreators({ deleteLabel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);