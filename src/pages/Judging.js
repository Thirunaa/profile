import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { judging, peerReviews } from '../utils/siteData';

function SectionTitle({ overline, title }) {
  return (
    <Box sx={{ mb: 5 }}>
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

export default function Judging() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Evaluation Panels" title="Judging" />

          {/* Judging roles */}
          {judging.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 10,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
                mb: 10,
              }}
            >
              <Typography sx={{ fontSize: '3rem', mb: 2 }}>⚖️</Typography>
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>No Judging Roles Yet</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>
                Hackathon panels, grant reviews, and competition judging will appear here.
              </Typography>
            </Box>
          ) : (
            <Box sx={{ mb: 10 }}>
              <Grid container spacing={3}>
                {judging.map((j, i) => (
                  <Grid item xs={12} md={6} key={i}>
                    <Card
                      sx={{
                        background: '#0f0f0f', border: '1px solid #1a1a1a',
                        borderRadius: 3, height: '100%',
                        '&:hover': { borderColor: 'rgba(255,197,0,0.25)' },
                        transition: 'border-color 0.2s ease',
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', fontSize: '1rem' }}>
                            {j.event}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#555555', flexShrink: 0 }}>{j.year}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#ffc500', mb: 2, fontSize: '0.82rem' }}>
                          {j.organizer}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75 }}>
                          {j.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Peer Review Section */}
          <Box>
            <SectionTitle overline="Microsoft CMT · Conference Peer Review" title="Papers Reviewed" />
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: '#666666', maxWidth: 640, lineHeight: 1.75 }}>
                Served as a peer reviewer for the following international conferences via the Microsoft Conference Management Toolkit (CMT), evaluating submitted research papers for technical merit, novelty, and contribution.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
              <Chip
                label={`${peerReviews.length} Conferences`}
                size="small"
                sx={{
                  background: 'rgba(255,197,0,0.08)',
                  color: '#ffc500',
                  border: '1px solid rgba(255,197,0,0.2)',
                  fontSize: '0.75rem',
                }}
              />
              <Chip
                label="2026"
                size="small"
                sx={{
                  background: '#111',
                  color: '#666',
                  border: '1px solid #222',
                  fontSize: '0.75rem',
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {peerReviews.map((pr, i) => (
                <Card
                  key={i}
                  sx={{
                    background: '#0f0f0f',
                    border: '1px solid #1a1a1a',
                    borderRadius: 2.5,
                    '&:hover': { borderColor: 'rgba(255,197,0,0.2)' },
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#e8e8e8', fontSize: '0.9rem', lineHeight: 1.5, mb: 0.75 }}>
                          {pr.conference}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                          <Typography variant="caption" sx={{ color: '#555555', fontSize: '0.75rem' }}>
                            📅 {pr.date}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#555555', fontSize: '0.75rem' }}>
                            📍 {pr.location}
                          </Typography>
                        </Box>
                      </Box>
                      {pr.link && (
                        <Button
                          size="small"
                          variant="text"
                          endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />}
                          component="a"
                          href={pr.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#555555',
                            fontSize: '0.72rem',
                            flexShrink: 0,
                            px: 1,
                            '&:hover': { color: '#ffc500' },
                          }}
                        >
                          Website
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
