import './index.css';
import './utils/tracer'; // Initialize Datadog tracing
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { logInfo } from './utils/logger';

logInfo('Application starting', { timestamp: new Date().toISOString() });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);