import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LayoutLinelengthContainer.scss';

function LayoutLinelengthContainer(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-l-linelength-container', className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

LayoutLinelengthContainer.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default LayoutLinelengthContainer;
