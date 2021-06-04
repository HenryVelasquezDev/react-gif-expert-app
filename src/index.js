import 'core-js/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';

import './index.css';

ReactDOM.render(
  <GifExpertApp  />,
  document.getElementById('root')
);

