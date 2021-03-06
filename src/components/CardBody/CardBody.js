import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function CardBody(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-card__body', className, {});

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default CardBody;
