import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffc500',
      light: '#ffd333',
      dark: '#e6b000',
      contrastText: '#000000',
    },
    background: {
      default: '#080808',
      paper: '#111111',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#888888',
    },
    divider: '#1e1e1e',
    action: {
      hover: 'rgba(255, 197, 0, 0.06)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 },
    h4: { fontWeight: 600, letterSpacing: '-0.01em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75, letterSpacing: '0.01em' },
    body2: { lineHeight: 1.65 },
    button: { fontWeight: 600, letterSpacing: '0.01em' },
    overline: { letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.7rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        'html, body': { margin: 0, padding: 0, scrollBehavior: 'smooth' },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: '#0a0a0a' },
        '::-webkit-scrollbar-thumb': { background: '#333333', borderRadius: '3px' },
        '::-webkit-scrollbar-thumb:hover': { background: '#444444' },
        '::selection': { background: 'rgba(255, 197, 0, 0.3)', color: '#ffffff' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '10px 24px',
        },
        containedPrimary: {
          background: '#ffc500',
          color: '#000000',
          '&:hover': { background: '#ffd333', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(255,197,0,0.3)' },
          transition: 'all 0.2s ease',
        },
        outlinedPrimary: {
          borderColor: 'rgba(255,197,0,0.5)',
          color: '#ffc500',
          '&:hover': { borderColor: '#ffc500', background: 'rgba(255,197,0,0.08)' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #1e1e1e',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#1e1e1e' },
      },
    },
  },
  shape: { borderRadius: 12 },
});

export default theme;
