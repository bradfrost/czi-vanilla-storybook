import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Hr.scss';

function Hr(props) {
  const { className, variant, ...other } = props;
  const componentClassName = classnames('cn-c-hr', className, {
    'cn-c-hr--thick': variant == 'thick'
  });

  return <hr className={componentClassName} {...other} />;
}

Hr.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations:
   * - **thick** yields a bolder horizontal rule
   */
  variant: PropTypes.oneOf(['thick'])
};

export default Hr;
