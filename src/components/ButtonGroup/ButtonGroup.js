import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ButtonGroup.scss';

function ButtonGroup(props) {
  const { align, children, className, behavior, ...other } = props;

  const componentClassName = classnames('cn-c-btn-group', className, {
    'cn-c-btn-group--responsive': behavior == 'responsive',
    'cn-c-btn-group--stacked': behavior == 'stacked'
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  /**
   * Behavioral variations for ButtonGroup.
   * - **responsive** results in a ButtonGroup that stacks on small screens, but displays side by side on larger screens
   * - **stacked** results in a ButtonGroup that stacks on all screen sizes
   */
  behavior: PropTypes.oneOf(['responsive', 'stacked']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default ButtonGroup;
