import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TableHeader(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-table__header', className, {});
  return (
    <thead className={componentClassName} {...other}>
      {children}
    </thead>
  );
}

TableHeader.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TableHeader;
