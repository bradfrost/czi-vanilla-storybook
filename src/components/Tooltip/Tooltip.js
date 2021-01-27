import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';
import TextPassage from '../TextPassage';
import { ESCAPE_KEYCODE, TAB_KEYCODE } from '../../util/keycodes';
import './Tooltip.scss';

function Tooltip(props) {
  /**
   * Initialize variables and states
   */
  const ref = useRef();
  const buttonRef = useRef();

  const [isActive, setIsActive] = useState(false);

  /**
   * Set isActive state to false when user clicks outside of button or tooltip
   */
  handleOnClickOutside(ref, () => setIsActive(false));

  /**
   * Toggle isActive state on click
   */
  function onClick(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  /**
   * Click outside function
   * 1) Do nothing if clicking tooltip button or box
   * 2) If current prop is isActive when clicked outside, focus on button when isActive is false
   * 3) Add event listener on mount
   * 4) Remove even listener on unmount
   */
  function handleOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = e => {
        /* 1 */
        if (
          !ref.current ||
          ref.current.contains(e.target) ||
          !buttonRef.current ||
          buttonRef.current.contains(e.target)
        ) {
          return;
        } else {
          /* 2 */
          setTimeout(() => {
            if (isActive) {
              buttonRef.current.focus();
            }
          }, 1);
        }

        handler(e);
      };

      /* 3 */
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      /* 4 */
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  }

  /**
   * Handle Keydown
   * 1) Remove isActive state and focus on the tooltip button
   */
  function onKeyDown(e) {
    if (e.keyCode === ESCAPE_KEYCODE || e.keyCode === TAB_KEYCODE) {
      setIsActive(false);
      setTimeout(() => {
        if (isActive) {
          buttonRef.current.focus();
        }
      }, 1);
    }
  }

  /**
   * Use effect
   * 1) Focus on the tooltip content if the isActive state is true
   */
  useEffect(() => {
    /* 1 */
    if (isActive) {
      ref.current.focus();
    }
  });

  const { className, children, align, buttonText, ...other } = props;

  const componentClassName = classnames('cn-c-tooltip', className, {
    'cn-is-active': isActive,
    'cn-c-tooltip--right': align == 'right',
    'cn-c-tooltip--below': align == 'below',
    'cn-c-tooltip--left': align == 'left'
  });

  return (
    <div className={componentClassName} {...other}>
      <span className="cn-c-tooltip__trigger">
        <Button
          variant="bare"
          hideText
          iconPosition="after"
          iconName="plus"
          aria-label={buttonText}
          text={buttonText}
          type="button"
          onClick={onClick}
          buttonRef={buttonRef}
        />
      </span>
      <span
        ref={ref}
        className="cn-c-tooltip__content"
        aria-hidden={!isActive}
        tabIndex={isActive ? 0 : -1}
        onKeyDown={onKeyDown}
      >
        <TextPassage>{children}</TextPassage>
      </span>
    </div>
  );
}

Tooltip.propTypes = {
  /**
   * Alignment variations
   * - **right** yields a tooltip that appears to the right of the trigger
   * - **below** yields a tooltip that appears below the trigger
   * - **left** yields a tooltip that appears to the left of the trigger
   */
  align: PropTypes.oneOf(['right', 'below', 'left']),
  /**
   * The visually-hidden button text for the tooltip trigger button
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Child node(s) that can be nested inside component. This gets displayed inside a `TextPassage` inside the tooltip
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string
};

export default Tooltip;
