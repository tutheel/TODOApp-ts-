import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customeTheme'; // corrected import path
import { Dashboard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
};

export default App;
