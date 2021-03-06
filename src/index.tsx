import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './ui/App';
import './index.scss';
//import { mergeStyles } from '@fluentui/react';

import reportWebVitals from './reportWebVitals';
/* mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    minWidth: '100%',
    width: '100vw',
    maxWidth: '100%',

    minHeight: '100%',
    height: '100vh',
    maxHidth: '100%',
  },
  ':global(#root)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
