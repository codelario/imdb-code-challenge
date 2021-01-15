import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating />, div);
  ReactDOM.unmountComponentAtNode(div);
});