import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Band.scss';

function Band(props) {
  const { className, variant, children, backgroundImage, ...other } = props;

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`
  };

  const componentClassName = classnames('cn-c-band', className, {
    'cn-c-band--brand': variant == 'brand'
  });

  return (
    <div
      style={backgroundImage && backgroundStyles}
      className={componentClassName}
      {...other}
    >
      {children}
    </div>
  );
}

Band.propTypes = {
  /**
   * Optional path to background image
   */
  backgroundImage: PropTypes.string,
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations of component.
   * - `rhapsodyblue` yields a dark blue background blue
   * - `purple` yields a brand purple background
   * - `dusk-30` yields a light purple background
   */
  variant: PropTypes.oneOf(['rhapsodyblue', 'purple', 'dusk-30'])
};

export default Band;
