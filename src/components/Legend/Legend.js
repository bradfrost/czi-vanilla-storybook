import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Legend.scss';
import '../Utilities/Utilities.scss';

function Legend(props) {
  const {
    className,
    id,
    legendAfter,
    optionalLabel,
    text,
    required,
    requiredLabel,
    hideLegend,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-legend', className, {
    'cn-u-is-vishidden': hideLegend
  });

  return (
    <legend className={componentClassName} id={id} {...other}>
      {text}{' '}
      {!required && <span className="cn-c-legend__flag">{optionalLabel}</span>}
      {requiredLabel && (
        <span className="cn-c-legend__flag">{requiredLabel}</span>
      )}
      {legendAfter && <span className="cn-c-legend__after">{legendAfter}</span>}
    </legend>
  );
}

Legend.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Toggles the visibility of the legend
   */
  hideLegend: PropTypes.bool,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Slot for node to appear directly after field legend. Typically used to include a Toolip
   */
  legendAfter: PropTypes.node,
  /**
   * String for the optional legend. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add brief additional information inline after the label
   */
  requiredLabel: PropTypes.string,
  /**
   * Legend text string
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

Legend.defaultProps = {
  required: true,
  optionalLabel: '(optional)'
};

export default Legend;
