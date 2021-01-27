import React from 'react';
import PropTypes from 'prop-types';

function getWidth() {
  return typeof window !== 'undefined' && window.innerWidth;
}

function getHeight() {
  return typeof window !== 'undefined' && window.innerHeight;
}

class WindowResize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: getWidth(),
      height: getHeight()
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: getWidth(),
      height: getHeight()
    });
  }

  render() {
    if (typeof this.props.children === 'function') {
      const renderedChildren = this.props.children(this.state);
      return renderedChildren && React.Children.only(renderedChildren);
    }
    return React.Children.only(
      React.cloneElement(this.props.children, this.state)
    );
  }
}

WindowResize.propTypes = {
  /**
   * Child node that will receive width and height
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

export default WindowResize;
