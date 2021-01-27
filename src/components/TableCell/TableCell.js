import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './TableCell.scss';

function TableCell(props) {
  const {
    behavior,
    children,
    className,
    tagName,
    rowSpan,
    colSpan,
    scope,
    headers,
    alignment,
    verticalAlignment,
    id,
    onClick,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-table__cell', className, {
    'cn-c-table__cell--align-left': alignment == 'left',
    'cn-c-table__cell--align-inset-left': alignment == 'insetLeft',
    'cn-c-table__cell--align-right': alignment == 'right',
    'cn-c-table__cell--align-center': alignment == 'center',
    'cn-c-table__cell--valign-center': verticalAlignment == 'center'
  });

  const TagName = tagName;

  return (
    <TagName
      className={componentClassName}
      rowSpan={rowSpan}
      colSpan={colSpan}
      scope={scope}
      headers={headers}
      id={id}
      {...other}
    >
      {children}
    </TagName>
  );
}

TableCell.propTypes = {
  /**
   * The alignment of the text in the cell
   */
  alignment: PropTypes.oneOf(['insetLeft', 'left', 'right', 'center']),
  /**
   * Behavior variation pulled in from table row
   */
  behavior: PropTypes.string,
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * This attribute contains a non-negative integer value that indicates for how many columns the cell extends
   */
  colSpan: PropTypes.number,
  /**
   * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the `th` elements that apply to this element.
   */
  headers: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * This attribute contains a non-negative integer value that indicates for how many rows the cell extends
   */
  rowSpan: PropTypes.number,
  /**
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope: PropTypes.oneOf(['row', 'col', 'colgroup']),
  /**
   * The tagName name for the table cell
   */
  tagName: PropTypes.string,
  /**
   * The vertical alignment of the text in the cell
   */
  verticalAlignment: PropTypes.oneOf(['center'])
};

TableCell.defaultProps = {
  tagName: 'td',
  alignment: 'left'
};

export default TableCell;
