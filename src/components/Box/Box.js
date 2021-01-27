import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Box.scss';

function Box(props) {
  const { className, children, styleModifier, variant, ...other } = props;

  const componentClassName = classnames('cn-c-box', className, {
    'cn-c-box--align-center': variant == 'center',
    'cn-c-box--flush': styleModifier == 'flush'
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

Box.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations for the Box
   * - **flush** removes padding
   */
  styleModifier: PropTypes.oneOf(['flush']),
  /**
   * Stylistic variations for the Box
   * - **center** horizontally and vertically aligns the content
   */
  variant: PropTypes.oneOf(['center'])
};

export default Box;
