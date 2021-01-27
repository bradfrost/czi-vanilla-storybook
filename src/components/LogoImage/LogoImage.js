import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function LogoImage(props) {
  const { src, alt, ...other } = props;

  return <img className="cn-c-logo__img" src={src} alt={alt} />;
}

LogoImage.propTypes = {
  /**
   * Alt text used for the image of the logo
   */
  alt: PropTypes.string,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Source of the image used for the logo
   */
  src: PropTypes.string
};

LogoImage.defaultProps = {
  src: 'https://via.placeholder.com/200x70',
  alt: 'placeholder image'
};

export default LogoImage;
