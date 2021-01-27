import React from 'react';
import PropTypes from 'prop-types';

import LogoImage from '../LogoImage';
import './Logo.scss';

function Logo(props) {
  const { href, title, ...other } = props;

  return (
    <div className="cn-c-logo" {...other}>
      <a href={href} title={title} className="cn-c-logo__link" rel="home">
        <LogoImage />
      </a>
    </div>
  );
}

Logo.propTypes = {
  /**
   * aria-label for logo link to describe logo link to screen readers
   */
  ariaLabel: PropTypes.string,
  /**
   * Logo link URL
   */
  href: PropTypes.string
};

Logo.defaultProps = {
  title: 'Your design system homepage'
};

export default Logo;
