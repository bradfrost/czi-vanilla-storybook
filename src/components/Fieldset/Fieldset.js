import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Legend from '../Legend';
import './Fieldset.scss';

function Fieldset(props) {
  const {
    className,
    legend,
    legendAfter,
    hideLegend,
    required,
    children,
    optionalLabel,
    requiredLabel,
    ...other
  } = props;
  const componentClassName = classnames('cn-c-fieldset', className, {});

  return (
    <fieldset className={componentClassName} {...other}>
      <Legend
        className="cn-c-fieldset__legend"
        text={legend}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
        hideLegend={hideLegend}
        legendAfter={legendAfter}
      />
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Toggles the visibility of the form control legend
   */
  hideLegend: PropTypes.bool,
  /**
   * HTML legend title text
   */
  legend: PropTypes.string,
  /**
   * Slot for node to appear directly after legend text. Typically used to include a Toolip
   */
  legendAfter: PropTypes.node,
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel: PropTypes.string,
  /**
   * Required is passed down to the legend to display "optional" or not
   */
  required: PropTypes.bool,
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel: PropTypes.string
};

Fieldset.defaultProps = {
  required: true
};

export default Fieldset;
