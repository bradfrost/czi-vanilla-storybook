import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './LoadingIndicator.scss';

function LoadingIndicator(props) {
  const { className, ...other } = props;

  const componentClassName = classnames('cn-c-loading-indicator', className);
  return (
    <div className={componentClassName} {...other}>
      <Icon
        aria-hidden="true"
        focusable="false"
        name="spinner"
        className="cn-c-loading-indicator__icon"
      />
    </div>
  );
}

LoadingIndicator.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default LoadingIndicator;
