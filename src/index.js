import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RoomProvider } from './Context'

ReactDOM.render(
  <RoomProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RoomProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
