import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TableFooter(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-table__footer', className, {});
  return (
    <tfoot className={componentClassName} {...other}>
      {children}
    </tfoot>
  );
}

TableFooter.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TableFooter;
