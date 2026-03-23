import React, { useState } from 'react';
import {
  Box, Container, Typography, Card, CardContent, CardMedia,
  Chip, Button, Grid, ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { portfolio } from '../utils/siteData';

function SectionTitle({ overline, title }) {
  return (
    <Box sx={{ mb: 6 }}>
      {overline && (
        <Typography variant="overline" sx={{ color: '#ffc500', display: 'block', mb: 1 }}>
          {overline}
        </Typography>
      )}
      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
        {title}
      </Typography>
      <Box sx={{ mt: 2, width: 48, height: 3, background: '#ffc500', borderRadius: 2 }} />
    </Box>
  );
}

const ALL_TAGS = ['All', ...Array.from(new Set(portfolio.flatMap((p) => p.tags)))];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? portfolio
      : portfolio.filter((p) => p.tags.includes(activeFilter));

  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Projects" title="Portfolio" />

          {/* Filter tabs */}
          <Box sx={{ mb: 5, overflowX: 'auto', pb: 1 }}>
            <ToggleButtonGroup
              value={activeFilter}
              exclusive
              onChange={(_, val) => val && setActiveFilter(val)}
              sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap' }}
            >
              {ALL_TAGS.map((tag) => (
                <ToggleButton
                  key={tag}
                  value={tag}
                  sx={{
                    border: '1px solid #1e1e1e !important',
                    borderRadius: '8px !important',
                    px: 2.5,
                    py: 0.75,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: activeFilter === tag ? '#000000' : '#888888',
                    background: activeFilter === tag ? '#ffc500 !important' : 'transparent',
                    '&:hover': { background: 'rgba(255,197,0,0.1) !important', color: '#ffffff' },
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Grid container spacing={3}>
            {filtered.map((project, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    background: '#0f0f0f',
                    border: '1px solid #1a1a1a',
                    borderRadius: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: 'rgba(255,197,0,0.3)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                    },
                    transition: 'all 0.25s ease',
                  }}
                >
                  {project.image && (
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{ height: 160, objectFit: 'cover', opacity: 0.8 }}
                    />
                  )}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', mb: 1.5, fontSize: '0.95rem' }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#888888', lineHeight: 1.7, mb: 2.5, flexGrow: 1, fontSize: '0.84rem' }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 3 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            background: 'rgba(255,197,0,0.08)',
                            color: '#ffc500',
                            border: '1px solid rgba(255,197,0,0.15)',
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.github && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="primary"
                          startIcon={<GitHubIcon fontSize="small" />}
                          component="a"
                          href={project.github}
                          target="_blank"
                          sx={{ flex: 1, fontSize: '0.78rem' }}
                        >
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          endIcon={<OpenInNewIcon fontSize="small" />}
                          component="a"
                          href={project.demo}
                          target="_blank"
                          sx={{ flex: 1, fontSize: '0.78rem' }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
