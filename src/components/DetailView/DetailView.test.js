import React from 'react';
import ReactDOM from 'react-dom';
import DetailView from './DetailView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailView />, div);
  ReactDOM.unmountComponentAtNode(div);
});