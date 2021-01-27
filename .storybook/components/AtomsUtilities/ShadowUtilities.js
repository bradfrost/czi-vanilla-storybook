import React, { Component } from 'react';
import { Hr } from '../../../src';
import '../../../src/components/Utilities/Utilities.scss';
import './Utilities.css';

export class ShadowUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>cn-u-box-shadow-small</code>
        <div className="cn-u-box-shadow-small sg-demo-box">
          Small box shadow
        </div>

        <Hr />

        <code>cn-u-box-shadow-medium</code>
        <div className="cn-u-box-shadow-medium sg-demo-box">
          Medium box shadow
        </div>

        <Hr />

        <code>cn-u-box-shadow-large</code>
        <div className="cn-u-box-shadow-large sg-demo-box">
          Large box shadow
        </div>
      </div>
    );
  }
}
