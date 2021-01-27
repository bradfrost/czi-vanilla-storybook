import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TableObject.scss';

function TableObject(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-table-object', className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

TableObject.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TableObject;
