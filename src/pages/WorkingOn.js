import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { workingOn } from '../utils/siteData';

function SectionTitle({ overline, title }) {
  return (
    <Box sx={{ mb: 5 }}>
      {overline && (
        <Typography variant="overline" sx={{ color: '#ffc500', display: 'block', mb: 1 }}>
          {overline}
        </Typography>
      )}
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Box sx={{ mt: 1.5, width: 40, height: 3, background: '#ffc500', borderRadius: 2 }} />
    </Box>
  );
}

function EmptyPlaceholder({ emoji, label }) {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        border: '1px dashed #222',
        borderRadius: 3,
        background: '#0c0c0c',
      }}
    >
      <Typography sx={{ fontSize: '2.5rem', mb: 2 }}>{emoji}</Typography>
      <Typography variant="body2" sx={{ color: '#444', fontSize: '0.85rem' }}>
        {label}
      </Typography>
    </Box>
  );
}

function LogoBadge({ logoType }) {
  const configs = {
    github: {
      bg: 'rgba(255,255,255,0.06)',
      color: '#e0e0e0',
      icon: <GitHubIcon sx={{ fontSize: 17 }} />,
    },
    nvidia: {
      bg: 'rgba(118,185,0,0.12)',
      color: '#76b900',
      label: 'NV',
    },
    anthropic: {
      bg: 'rgba(204,96,51,0.14)',
      color: '#e06030',
      label: 'A',
    },
    judge: {
      bg: 'rgba(255,197,0,0.1)',
      color: '#ffc500',
      label: '⚖️',
    },
    claw: {
      bg: 'rgba(139,92,246,0.12)',
      color: '#a78bfa',
      label: '🐾',
    },
    openai: {
      bg: 'rgba(16,163,127,0.12)',
      color: '#10a37f',
      label: 'AI',
    },
    servicenow: {
      bg: 'rgba(98,171,32,0.12)',
      color: '#62ab20',
      label: 'SN',
    },
  };
  const cfg = configs[logoType] || { bg: '#1a1a1a', color: '#888', label: '?' };
  return (
    <Box
      sx={{
        width: 34,
        height: 34,
        borderRadius: 1.5,
        background: cfg.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {cfg.icon ? (
        <Box sx={{ color: cfg.color, display: 'flex' }}>{cfg.icon}</Box>
      ) : (
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 900, color: cfg.color, letterSpacing: '-0.01em' }}>
          {cfg.label}
        </Typography>
      )}
    </Box>
  );
}

function ReadingCard({ item }) {
  return (
    <Card
      component={item.link ? 'a' : 'div'}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: '#0f0f0f',
        border: '1px solid #1a1a1a',
        borderRadius: 3,
        height: '100%',
        textDecoration: 'none',
        display: 'block',
        '&:hover': { borderColor: 'rgba(255,197,0,0.3)' },
        transition: 'border-color 0.2s ease',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1.5 }}>
          <LogoBadge logoType={item.logoType} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: '#ffc500', fontSize: '0.62rem', display: 'block', mb: 0.25 }}>
              {item.type || 'Reading'}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', fontSize: '0.92rem', lineHeight: 1.4 }}>
              {item.title}
            </Typography>
          </Box>
        </Box>
        {item.author && (
          <Typography variant="body2" sx={{ color: '#666666', mb: 1.5, fontSize: '0.8rem' }}>
            {item.author}
          </Typography>
        )}
        {item.note && (
          <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.7, fontSize: '0.83rem' }}>
            {item.note}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

function BuildingCard({ item }) {
  return (
    <Card
      component={item.link ? 'a' : 'div'}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: '#0f0f0f',
        border: '1px solid #1a1a1a',
        borderRadius: 3,
        height: '100%',
        textDecoration: 'none',
        display: 'block',
        '&:hover': { borderColor: 'rgba(255,197,0,0.3)' },
        transition: 'border-color 0.2s ease',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1 }}>
          <LogoBadge logoType={item.logoType} />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', fontSize: '0.92rem', lineHeight: 1.4 }}>
              {item.title}
            </Typography>
            {item.status && (
              <Chip
                label={item.status}
                size="small"
                sx={{
                  background: 'rgba(16,185,129,0.1)',
                  color: '#34d399',
                  border: '1px solid rgba(16,185,129,0.25)',
                  fontSize: '0.62rem',
                  flexShrink: 0,
                  ml: 1,
                  height: 20,
                }}
              />
            )}
          </Box>
        </Box>
        {item.description && (
          <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.7, mb: 2, fontSize: '0.83rem' }}>
            {item.description}
          </Typography>
        )}
        {item.tags?.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {item.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  background: '#1a1a1a',
                  color: '#888888',
                  border: '1px solid #252525',
                  fontSize: '0.68rem',
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default function WorkingOn() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          {/* Page header */}
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="overline"
              sx={{ color: '#ffc500', display: 'block', mb: 1 }}
            >
              Currently
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
            >
              Working On
            </Typography>
            <Typography variant="body1" sx={{ color: '#666666', maxWidth: 560 }}>
              A live snapshot of what I'm reading and building right now. Updated as things change.
            </Typography>
            <Box sx={{ mt: 2, width: 48, height: 3, background: '#ffc500', borderRadius: 2 }} />
          </Box>

          {/* Reading */}
          <Box sx={{ mb: 10 }}>
            <SectionTitle overline="Currently Reading" title="What I'm Reading" />
            {workingOn.reading.length === 0 ? (
              <EmptyPlaceholder emoji="📚" label="Reading list coming soon — check back shortly." />
            ) : (
              <Grid container spacing={3}>
                {workingOn.reading.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <ReadingCard item={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {/* Building */}
          <Box>
            <SectionTitle overline="Currently Building" title="What I'm Building" />
            {workingOn.building.length === 0 ? (
              <EmptyPlaceholder emoji="🛠️" label="Projects in progress will appear here soon." />
            ) : (
              <Grid container spacing={3}>
                {workingOn.building.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <BuildingCard item={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
