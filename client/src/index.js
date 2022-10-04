import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import {UserInfoProvider } from './context/UserInfoProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserInfoProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        </UserInfoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);