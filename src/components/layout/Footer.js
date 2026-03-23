import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { profile } from '../../utils/siteData';

const SOCIAL_ICONS = {
  github: { icon: <GitHubIcon fontSize="small" />, href: profile.socials.github },
  linkedin: { icon: <LinkedInIcon fontSize="small" />, href: profile.socials.linkedin },
  twitter: { icon: <TwitterIcon fontSize="small" />, href: profile.socials.twitter },
  youtube: { icon: <YouTubeIcon fontSize="small" />, href: profile.socials.youtube },
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #1a1a1a',
        py: 5,
        mt: 10,
        background: '#080808',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: 800, color: '#ffc500', fontSize: '1rem', mb: 0.5 }}
            >
              {profile.shortName}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.8rem' }}>
              Delivery Engineering Manager · LLM Training
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {Object.values(SOCIAL_ICONS).map((s, i) => (
              <IconButton
                key={i}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: '#555555',
                  '&:hover': { color: '#ffc500', background: 'rgba(255,197,0,0.08)' },
                  transition: 'all 0.2s ease',
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: '#141414' }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: '#333333', fontSize: '0.75rem' }}
        >
          © {new Date().getFullYear()} Thirunaavukkarasu Murugesan. Built with React & MUI.
        </Typography>
      </Container>
    </Box>
  );
}
