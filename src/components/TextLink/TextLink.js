import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextLink.scss';

function TextLink(props) {
  const {
    href,
    className,
    children,
    target,
    theme,
    screenReaderText,
    variant,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-text-link', className, {
    'cn-c-text-link--inverted': theme == 'inverted',
    'cn-c-text-link--bold': variant == 'bold'
  });
  return (
    <a className={componentClassName} href={href} target={target} {...other}>
      {children}
      {screenReaderText && (
        <span className="cn-u-is-vishidden">{screenReaderText}</span>
      )}
    </a>
  );
}

TextLink.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href: PropTypes.string.isRequired,
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible button text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText: PropTypes.string,
  /**
   * List of variants:
   * - **bold** yields bolder font weight than default
   */
  variant: PropTypes.oneOf(['bold']),
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  /**
   * Theme variant:
   * - **inverted** yields lighter typography for darker backgrounds
   */
  theme: PropTypes.oneOf(['inverted'])
};

export default TextLink;
