import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme();
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
} else {
  console.error("Root element not found");
}

