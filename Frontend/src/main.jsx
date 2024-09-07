import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

// Access environment variables using import.meta.env
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
