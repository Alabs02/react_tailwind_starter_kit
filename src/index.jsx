import { StrictMode } from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import { App } from './Pages';
import * as serviceWorker from './serviceWorker';
import './index.css';

render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
