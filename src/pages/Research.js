import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { research, profile } from '../utils/siteData';

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

const PROFILE_LINKS = [
  { label: 'Google Scholar', href: profile.socials.scholar },
  { label: 'ResearchGate', href: profile.socials.researchgate },
];

export default function Research() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 3, mb: 2 }}>
            <SectionTitle overline="Academic Work" title="Research" />
            <Box sx={{ display: 'flex', gap: 1.5, pt: { xs: 0, md: 1 } }}>
              {PROFILE_LINKS.map((p) => (
                <Button
                  key={p.label}
                  variant="outlined"
                  color="primary"
                  size="small"
                  endIcon={<OpenInNewIcon fontSize="inherit" />}
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                >
                  {p.label}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {research.map((paper, i) => (
              <Card
                key={i}
                sx={{
                  background: '#0f0f0f',
                  border: '1px solid #1a1a1a',
                  borderRadius: 3,
                  '&:hover': { borderColor: '#2a2a2a' },
                  transition: 'border-color 0.2s ease',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  {/* Title + View button */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', lineHeight: 1.4 }}>
                      {paper.title}
                    </Typography>
                    {paper.link && (
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        endIcon={<OpenInNewIcon fontSize="small" />}
                        component="a"
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ flexShrink: 0 }}
                      >
                        View
                      </Button>
                    )}
                  </Box>

                  {/* Venue + year */}
                  <Typography variant="body2" sx={{ color: '#ffc500', mb: 1.5, fontSize: '0.82rem' }}>
                    {paper.venue} · {paper.year}
                  </Typography>

                  {/* Role chip + authors */}
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: paper.roleNote ? 1 : 2, flexWrap: 'wrap' }}>
                    {paper.role && (
                      <Chip
                        label={paper.role}
                        size="small"
                        sx={{
                          background: paper.role === 'Research Assistant'
                            ? 'rgba(99,102,241,0.1)' : 'rgba(255,197,0,0.08)',
                          color: paper.role === 'Research Assistant' ? '#818cf8' : '#ffc500',
                          border: `1px solid ${paper.role === 'Research Assistant'
                            ? 'rgba(99,102,241,0.25)' : 'rgba(255,197,0,0.2)'}`,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                    {paper.coauthors?.length > 0 && (
                      <Typography variant="body2" sx={{ color: '#666666', fontSize: '0.82rem' }}>
                        {paper.coauthors.join(', ')}
                      </Typography>
                    )}
                  </Box>

                  {/* RA note */}
                  {paper.roleNote && (
                    <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.8rem', mb: 2, fontStyle: 'italic' }}>
                      {paper.roleNote}
                    </Typography>
                  )}

                  {/* Abstract */}
                  <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75, mb: 3 }}>
                    {paper.abstract}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {paper.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          background: 'rgba(255,197,0,0.08)',
                          color: '#ffc500',
                          border: '1px solid rgba(255,197,0,0.2)',
                          fontSize: '0.72rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
