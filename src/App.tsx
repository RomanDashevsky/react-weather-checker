import React from 'react';
import AdminPanel from './admin/AdminPanel'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routing/AppRouter'
import Navigation from './admin/Navigation'

function App() {
  return (
    <BrowserRouter>
      <AdminPanel content={<AppRouter/>} navMenu={<Navigation/>} />
    </BrowserRouter>
  );
}

export default App;
