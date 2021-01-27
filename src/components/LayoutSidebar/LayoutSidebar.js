import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LayoutSidebar.scss';

function LayoutSidebar(props) {
  const { children, size, className, variant, position, ...other } = props;

  const componentClassName = classnames('cn-l-sidebar', className, {
    'cn-l-sidebar--reversed': variant == 'reversed',
    'cn-l-sidebar--fixed': position == 'fixed',
    'cn-l-sidebar--narrow': size == 'narrow'
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

LayoutSidebar.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Position variations:
   * - **fixed** yields a layout with a fixed left-aligned sidebar
   */
  position: PropTypes.oneOf(['fixed']),
  /**
   * Size variations:
   * - **narrow** yields a narrower sidebar width
   */
  size: PropTypes.oneOf(['narrow']),
  /**
   * Stylistic variations:
   * - **reversed** switches the order of the sidebar and main content
   */
  variant: PropTypes.oneOf(['reversed'])
};

export default LayoutSidebar;
