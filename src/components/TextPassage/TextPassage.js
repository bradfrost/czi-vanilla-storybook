import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LayoutLinelengthContainer from '../LayoutLinelengthContainer';
import './TextPassage.scss';

function TextPassage(props) {
  const { capLinelength, className, size, children, ...other } = props;

  const componentClassName = classnames('cn-c-text-passage', className, {
    'cn-c-text-passage--small': size == 'small',
    'cn-c-text-passage--large': size == 'large'
  });

  return (
    <div className={componentClassName} {...other}>
      {capLinelength ? (
        <LayoutLinelengthContainer className="cn-c-text-passage__inner">
          {children}
        </LayoutLinelengthContainer>
      ) : (
        <div className="cn-c-text-passage__inner">{children}</div>
      )}
    </div>
  );
}

TextPassage.propTypes = {
  /**
   * Toggles capping the line length to a comfortable character count. Set to `true` by default, and setting to `false` results in a TextPassage that fills 100% of its container, resulting in longer line lengths
   */
  capLinelength: PropTypes.bool,
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Size variations:
   * - **small** yields a TextPassage with smaller typography
   * - **large** yields a TextPassage with larger typography
   */
  size: PropTypes.oneOf(['small', 'large'])
};

TextPassage.defaultProps = {
  capLinelength: true
};

export default TextPassage;
