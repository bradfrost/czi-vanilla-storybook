import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import PrimaryNavItem from '../PrimaryNavItem';
import './PrimaryNav.scss';

function PrimaryNav(props) {
  const CONTAINER = Symbol('CONTAINER');

  const [currentIndex, setCurrentIndex] = useState(null);

  PrimaryNav.id = id || shortid.generate();

  function onToggle(index, e) {
    e.preventDefault();

    if (!items[index].megaMenuItems) return;

    if (currentIndex != index) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(null);
    }
  }

  function onNavClicked() {
    setCurrentIndex(null);
  }

  const { className, items, id, ariaLabel, ...other } = props;

  const componentClassName = classnames('cn-c-primary-nav', className);

  return (
    <nav
      id={PrimaryNav.id}
      aria-label={ariaLabel}
      className={componentClassName}
      {...other}
    >
      <ul
        className="cn-c-primary-nav__list"
        ref={ref => (PrimaryNav[CONTAINER] = ref)}
      >
        {items.map((item, index) => {
          const itemClassName = classnames({
            'cn-is-active': item.megaMenuItems && currentIndex === index
          });
          return (
            <PrimaryNavItem
              className={itemClassName}
              iconName={item.iconName}
              key={`cn-c-primary-nav-item-${index}`}
              tagName={item.tag}
              href={item.href}
              text={item.text}
              items={item.megaMenuItems}
              onClick={e => onToggle(index, e)}
              closeMenu={onNavClicked}
            />
          );
        })}
      </ul>
    </nav>
  );
}

PrimaryNav.propTypes = {
  /**
   * aria-label for `nav` element to describe PrimaryNav to screen readers
   */
  ariaLabel: PropTypes.string,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

PrimaryNav.defaultProps = {
  ariaLabel: 'primary navigation'
};

export default PrimaryNav;
