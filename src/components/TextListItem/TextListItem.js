import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TextListItem(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-text-list__item', className, {});
  return (
    <li className={componentClassName} {...other}>
      {children}
    </li>
  );
}

TextListItem.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default TextListItem;
