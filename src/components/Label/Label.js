import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Label.scss';
import '../Utilities/Utilities.scss';

function Label(props) {
  const {
    className,
    id,
    htmlFor,
    optionalLabel,
    labelAfter,
    text,
    required,
    requiredLabel,
    hideLabel,
    ...other
  } = props;

  const componentClassName = classnames('cn-c-label', className, {
    'cn-u-is-vishidden': hideLabel
  });

  return (
    <label className={componentClassName} htmlFor={htmlFor} id={id} {...other}>
      {text}{' '}
      {!required && <span className="cn-c-label__flag">{optionalLabel}</span>}
      {requiredLabel && (
        <span className="cn-c-label__flag">{requiredLabel}</span>
      )}
      {labelAfter && <span className="cn-c-label__after">{labelAfter}</span>}
    </label>
  );
}

Label.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel: PropTypes.bool,
  /**
   * HTML `for` attribute, which maps the label to an associated input `id`
   */
  htmlFor: PropTypes.string,
  /**
   * HTML id for the component
   */
  id: PropTypes.string,
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter: PropTypes.node,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Indicates that field is required for form to be successfully submitted. Non-required fields will display a text "(optional)" beside the label text
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string,
  /**
   * The label text string
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

Label.defaultProps = {
  required: false,
  optionalLabel: '(optional)'
};

export default Label;
