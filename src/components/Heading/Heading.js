import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Heading.scss';

function Heading(props) {
  const { className, children, tagName, size, ...other } = props;

  const componentClassName = classnames('cn-c-heading', className, {
    'cn-c-heading--size-1': size === 1,
    'cn-c-heading--size-2': size === 2,
    'cn-c-heading--size-3': size === 3,
    'cn-c-heading--size-4': size === 4,
    'cn-c-heading--size-5': size === 5,
    'cn-c-heading--size-6': size === 6,
    'cn-c-heading--size-7': size === 7,
    'cn-c-heading--size-8': size === 8
  });

  const TagName = tagName;
  return (
    <TagName className={componentClassName} {...other}>
      {children}
    </TagName>
  );
}

Heading.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Size variants of the Heading component, ranging from 1-7. These numbers map to typographic sizing/style presets. This prop is used in instances where a Heading needs to use a specific tag (such as `h3`) for semantic reasons, but needs to be styled like something other than its default styles (such as an `h2` or `h1`).
   */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * The rendered tag name of the Heading. The tag name should always relate to the [document outline](http://html5doctor.com/outlines/) and a tag name should never be chosen for its default aesthetic qualities. If a specific style is desired, use the `size` prop to manipulate the Heading style.
   */
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export default Heading;
