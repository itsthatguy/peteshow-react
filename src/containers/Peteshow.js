import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fillOutForm } from 'actions/peteshow';

const STYLES = {
  container: {
    backgroundColor: '#232323',
    color: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    padding: 10,
    position: 'fixed',
    right: 10,
    top: 10,
    width: 300,
  }
};

class Peteshow extends Component {
  static propTypes = {
    inputs: PropTypes.array,
    actions: PropTypes.object,
  };

  fillOutForm = () => {
    const { actions } = this.props;
    return actions.fillOutForm();
  }

  fillOutFormAndSubmit = () => {
    const { actions } = this.props;
    return actions.fillOutForm();
  }

  render () {
    const Peteshows = () => (
      <div>
        {this.props.inputs.map((field, key) => (
          <div key={key}>{field}</div>
        ))}
      </div>
    );

    return (
      <div style={STYLES.container}>
        <h2>Peteshow</h2>
        <a onClick={this.fillOutForm}>Fill Out Forms</a>
        <a onClick={this.fillOutForm}>Fill Out Forms and Submit</a>
        { this.props.inputs.length > 0 &&
          <div>
            <h3>Stored:</h3>
            <Peteshows />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputs: state.peteshow.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fillOutForm }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Peteshow);
