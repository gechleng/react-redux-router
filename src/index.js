import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { Provider} from 'react-redux';
import store from './store';

//router
import { BrowserRouter  } from 'react-router-dom';

const app = (
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter >
)

ReactDOM.render(
  app,
  document.getElementById('root'));
registerServiceWorker();
