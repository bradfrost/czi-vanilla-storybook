import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './PageHeader.scss';

function PageHeader(props) {
  const {
    align,
    className,
    description,
    kicker,
    size,
    title,
    titleAfter,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-page-header', className, {
    'cn-c-page-header--small': size == 'small',
    'cn-c-page-header--center': align == 'center'
  });

  return (
    <div className={componentClassName} {...other}>
      {kicker && <p className="cn-c-page-header__kicker">{kicker}</p>}
      <h1 className="cn-c-page-header__title">
        {title}
        {titleAfter && (
          <span className="cn-c-page-header__title-after">{titleAfter}</span>
        )}
      </h1>

      {description && (
        <div className="cn-c-page-header__description cn-c-text-passage">
          {description}
        </div>
      )}
    </div>
  );
}

PageHeader.propTypes = {
  /**
   * Align variations:
   * - **center** yields a PageHeader whose contents are centered
   */
  align: PropTypes.oneOf(['center']),
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Description text that appears directly below the main title
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Kicker appears above the title
   */
  kicker: PropTypes.string,
  /**
   * Size variations:
   * - **small** yields a PageHeader with smaller typography
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Page heading title text
   */
  title: PropTypes.string.isRequired,
  /**
   * Slot for node to appear to the right of the page title. Typically used to include a Badge, Button, or other component
   */
  titleAfter: PropTypes.node
};

export default PageHeader;
