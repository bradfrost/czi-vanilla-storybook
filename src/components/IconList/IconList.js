import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './IconList.scss';

function IconList(props) {
  const { className, items, ...other } = props;

  const componentClassName = classnames('cn-c-icon-list', className, {});
  return (
    <ul className={componentClassName} {...other}>
      {items.map((item, index) => {
        return (
          <li
            className="cn-c-icon-list__item"
            key={`cn-c-icon-list__item-${index}`}
          >
            <Icon
              name={item.iconName}
              aria-label={item.title}
              className="cn-c-icon-list__icon"
            />
          </li>
        );
      })}
    </ul>
  );
}

IconList.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default IconList;
