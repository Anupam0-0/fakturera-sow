import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { TranslationProvider } from './i18n/TranslationProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TranslationProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </TranslationProvider>
  </BrowserRouter>
)
