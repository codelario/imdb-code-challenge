import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './HeaderContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});