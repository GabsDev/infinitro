import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/styles";

const theme = createTheme({palette: {primary: {main: '#000000',}, secondary: {main: '#FFFFFF',},},});


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </StrictMode>,
)
