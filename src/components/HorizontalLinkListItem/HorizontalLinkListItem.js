import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import '../Utilities/Utilities.scss';

function HorizontalLinkListItem(props) {
  const {
    href,
    text,
    iconName,
    onClick,
    linkListRef,
    screenReaderText,
    target,
    meta,
    ...other
  } = props;

  return (
    <li className="cn-c-horizontal-link-list__item" {...other}>
      <a
        className="cn-c-horizontal-link-list__link"
        href={href}
        onClick={onClick}
        ref={linkListRef}
        target={target}
      >
        {iconName && (
          <Icon
            aria-hidden="true"
            focusable="false"
            name={iconName}
            className="cn-c-horizontal-link-list__icon"
          />
        )}
        <div className="cn-c-horizontal-link-list__text">
          {text}
          {screenReaderText && ' '}
          {screenReaderText && (
            <span className="cn-u-is-vishidden">{screenReaderText}</span>
          )}
        </div>
      </a>
      {meta && <span className="cn-c-horizontal-link-list__meta">{meta}</span>}
    </li>
  );
}

HorizontalLinkListItem.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href: PropTypes.string,
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName: PropTypes.string,
  /**
   * Passed down from higher level component that allows functions to reference the LinkList
   */
  linkListRef: PropTypes.string,
  /**
   * Additional text after the text
   */
  meta: PropTypes.string,
  /**
   * Click handler for link
   */
  onClick: PropTypes.func,
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible link text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText: PropTypes.string,
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  /**
   * Link text string
   */
  text: PropTypes.string
};

export default HorizontalLinkListItem;
