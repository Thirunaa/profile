import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Achievements from './pages/Achievements';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Memberships from './pages/Memberships';
import Judging from './pages/Judging';
import Portfolio from './pages/Portfolio';
import WorkingOn from './pages/WorkingOn';
import Copyrights from './pages/Copyrights';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/judging" element={<Judging />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/working-on" element={<WorkingOn />} />
          <Route path="/copyrights" element={<Copyrights />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
