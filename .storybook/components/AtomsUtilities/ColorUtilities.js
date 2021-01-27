import React, { Component } from 'react';
import { Hr } from '../../../src';
import '../../../src/components/Utilities/Utilities.scss';
import './Utilities.css';

export class ColorUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>cn-u-color-utility-success</code>
        <h2 className="cn-u-color-utility-success">Success text</h2>

        <Hr />

        <code>cn-u-color-utility-error</code>
        <h2 className="cn-u-color-utility-error">Error text</h2>

        <Hr />

        <code>cn-u-color-utility-warning</code>
        <h2 className="cn-u-color-utility-warning">Warning text</h2>

        <Hr />

        <code>cn-u-color-utility-info</code>
        <h2 className="cn-u-color-utility-info">Info text</h2>
      </div>
    );
  }
}
