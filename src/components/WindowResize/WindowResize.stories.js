import React from 'react';
import WindowResize from './WindowResize';

export default {
  title: 'Organisms/Interactive/WindowResize',
  component: WindowResize
};

export const Default = () => (
  <WindowResize>
    {({ width, height }) => {
      return (
        <div>
          <p>Window width: {width}</p>
          <p>Window height: {height}</p>
        </div>
      );
    }}
  </WindowResize>
);
