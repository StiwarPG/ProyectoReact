import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {AppMultiple} from './basquet/basquet'
import App from './App';
import './index.css'
import  {AppMultiple} from './basquet/petos/basquet.jsx'

createRoot(document.getElementById('root')).render(
  <>
      <AppMultiple/>
  </>
);