import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextList.scss';

function TextList(props) {
  const {
    className,
    children,
    size,
    variant,
    theme,
    tagName,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-text-list', className, {
    'cn-c-text-list--tiny': size == 'tiny',
    'cn-c-text-list--small': size == 'small',
    'cn-c-text-list--inline': variant == 'inline',
    'cn-c-text-list--inverted': theme == 'inverted',
    'cn-c-text-list--ol': tagName == 'ol'
  });
  if (tagName == 'ol') {
    return (
      <ol className={componentClassName} {...other}>
        {children}
      </ol>
    );
  } else {
    return (
      <ul className={componentClassName} {...other}>
        {children}
      </ul>
    );
  }
}

TextList.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Size variant:
   * - **small** yields a TextList with smaller typography
   */
  size: PropTypes.oneOf(['small', 'tiny']),
  /**
   * The tagName name for the list element, defaults to use ul
   */
  tagName: PropTypes.string,
  /**
   * Theme variant:
   * - **inverted** yields a TextList with lighter typography for darker backgrounds
   */
  theme: PropTypes.oneOf(['inverted']),
  /**
   * Style variant:
   * - **inline** yields a TextList that places items side by side
   */
  variant: PropTypes.oneOf(['inline'])
};

export default TextList;
