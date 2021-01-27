import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Main.scss';

function Main(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-main', className, {});
  return (
    <main id="main-content" className={componentClassName} {...other}>
      {children}
    </main>
  );
}

Main.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default Main;
