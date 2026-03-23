import React, { useState, useEffect } from 'react';
import { profile } from '../../utils/siteData';
import {
  AppBar, Toolbar, Box, Container, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'About', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Major Work', path: '/achievements' },
  { label: 'Projects', path: '/portfolio' },
  { label: 'Working On', path: '/working-on' },
  { label: 'Blog', path: '/blog' },
  { label: 'Media', path: '/media' },
  { label: 'Memberships', path: '/memberships' },
  { label: 'Judging', path: '/judging' },
  { label: 'Copyrights & Patents', path: '/copyrights' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(8, 8, 8, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 68, justifyContent: 'space-between' }}>
            {/* Logo */}
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '-0.02em',
                  color: '#ffc500',
                  '&:hover': { opacity: 0.85 },
                  transition: 'opacity 0.2s',
                }}
              >
                Profile
              </Typography>
            </NavLink>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        fontSize: '0.82rem',
                        fontWeight: isActive(item.path) ? 600 : 500,
                        color: isActive(item.path) ? '#ffc500' : '#aaaaaa',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: '#ffffff' },
                        '&::after': isActive(item.path) ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 16,
                          height: 2,
                          background: '#ffc500',
                          borderRadius: 1,
                        } : {},
                      }}
                    >
                      {item.label}
                    </Box>
                  </NavLink>
                ))}
              </Box>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: '#ffffff' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0d0d0d',
            borderLeft: '1px solid #1e1e1e',
            px: 2,
            pt: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, px: 1 }}>
          <Typography sx={{ fontWeight: 800, color: '#ffc500', fontSize: '1.1rem' }}>
            {profile.shortName}
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#888' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <List disablePadding>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <NavLink
                to={item.path}
                style={{ textDecoration: 'none', width: '100%' }}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    color: isActive(item.path) ? '#ffc500' : '#aaaaaa',
                    background: isActive(item.path) ? 'rgba(255,197,0,0.08)' : 'transparent',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    '&:hover': { background: 'rgba(255,255,255,0.05)', color: '#fff' },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 'inherit' }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
