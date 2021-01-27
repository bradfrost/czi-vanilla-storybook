import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Table.scss';

function Table(props) {
  const {
    behavior,
    caption,
    children,
    className,
    variant,
    size,
    stackedFirstCellAsHeading,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-table', className, {
    'cn-c-table--stacked': behavior == 'stacked',
    'cn-c-table--sticky-header': behavior == 'sticky-header',
    'cn-c-table--lined': variant == 'lined',
    'cn-c-table--fixed': variant == 'fixed',
    'cn-c-table--grid': variant == 'grid',
    'cn-c-table--condensed': size == 'condensed',
    'cn-c-table--stacked-first-cell-heading': stackedFirstCellAsHeading
  });

  return (
    <table className={componentClassName} {...other}>
      {caption && <caption className="cn-c-table__caption">{caption}</caption>}
      {children}
    </table>
  );
}

Table.propTypes = {
  /**
   * Behavior variations:
   * - **stacked** stacks table rows on small screens and then breaks into a table layout on larger screens. Labels appear above the TableCell content in the stacked view by including the `data-heading` attribute to the `TableCell` component (i.e. `<TableCell data-heading="Travelers">`)
   * - **sticky-header** stacks table rows on small screens and then breaks into a table layout on larger screens
   */
  behavior: PropTypes.oneOf(['stacked', 'sticky-header']),
  /**
   * HTML caption property for table
   */
  caption: PropTypes.string,
  /**
   * Child node(s) that can be nested inside component. `TableHeader`, `TableFooter`, and `TableBody` are the only permissable children of Table
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Size variations:
   * - **condensed** yields a more compact table display
   */
  size: PropTypes.oneOf(['condensed']),
  /**
   * Specific to `behavior="stacked"`, this prop renders the first table cell in a larger font size,
   * serving as a heading for the individual stacked block
   */
  stackedFirstCellAsHeading: PropTypes.bool,
  /**
   * Stylistic variations:
   * - **lined** yields a data table with lines between cells
   * - **fixed** yields a data table with `table-layout: fixed;`
   * - **separate-headings** yields a data table that puts a gap between table heading borders
   */

  variant: PropTypes.oneOf(['lined', 'fixed'])
};

Table.defaultProps = {
  stackedFirstCellAsHeading: true
};

export default Table;
