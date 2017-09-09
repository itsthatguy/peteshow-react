import React from 'react';
import PropTypes from 'prop-types';

import Peteshow from 'components/Peteshow';

const Layout = () => (
  <div>
    <Peteshow />
  </div>
);

Layout.propTypes = {
  peteshows: PropTypes.array,
};

export default Layout;
