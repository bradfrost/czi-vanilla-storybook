import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LayoutSection.scss';

function LayoutSection(props) {
  const { className, children, area, ...other } = props;

  const componentClassName = classnames('cn-l-section', className, {
    'cn-l-sidebar__main': area == 'main',
    'cn-l-sidebar__sidebar': area == 'sidebar'
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

LayoutSection.propTypes = {
  /**
   * Used to define the area that the LayoutSection lives
   * - **main** defines larger, primary section of content within LayoutSidebar
   * - **sidebar** defines narrower, secondary section of content within LayoutSidebar
   */
  area: PropTypes.oneOf(['main', 'sidebar']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default LayoutSection;
