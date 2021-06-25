import React from 'react';
import AdminPanel from './admin/AdminPanel'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routing/AppRouter'
import Navigation from './admin/Navigation'
import { ApiKeyProvider } from './pages/shared/store/api-key/ApiKeyContext'
import { CityProvider } from './pages/weather-checker/CityContext'

function App() {
  return (
    <ApiKeyProvider>
      <CityProvider>
        <BrowserRouter>
          <AdminPanel content={<AppRouter/>} navMenu={<Navigation/>} />
        </BrowserRouter>
      </CityProvider>
    </ApiKeyProvider>
  );
}

export default App
