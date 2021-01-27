import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { allByType } from 'react-children-by-type';
import TableCell from '../TableCell';

function TableRow(props) {
  const { children, className, variant, behavior, onClick, ...other } = props;

  const componentClassName = classnames('cn-c-table__row', className, {
    'cn-c-table__row--bare': variant == 'bare',
    'cn-c-table__row--clickable': behavior == 'clickable'
  });

  const cells = allByType(children, TableCell);

  return (
    <tr className={componentClassName} {...other}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  /**
   * Behavior variations:
   * - **clickable** yields a table row that has a click event attached to it
   */
  behavior: PropTypes.oneOf(['clickable']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations:
   * - **bare** yields a table row without any bottom border
   */
  variant: PropTypes.oneOf(['bare'])
};

export default TableRow;
