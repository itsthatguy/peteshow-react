import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Peteshow from 'containers/Peteshow';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Peteshow />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
