import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Home, { Index } from './pages/Index';
import './assets/less/index.less';

const App: React.FC = () => {
  return <Index/>
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw Error('rootElement is null')
}

const root = createRoot(rootElement);
root.render(<App/>)
