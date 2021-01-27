import React, { Component } from 'react';
import '../../../src/components/Utilities/Utilities.scss';
import './Utilities.css';

export class VisibilityUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>cn-u-is-hidden</code>
        <h2 className="cn-u-is-hidden">
          Completely remove from the flow and screen readers.
        </h2>

        <hr />
        <code>cn-u-is-vishidden</code>
        <h2 className="cn-u-is-vishidden">
          Hides from screens but leaves content available to assitive
          technologies.
        </h2>
      </div>
    );
  }
}
