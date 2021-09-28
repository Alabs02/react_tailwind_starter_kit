import { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';
import { App } from './Pages';
import * as serviceWorker from './serviceWorker';
import './index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
