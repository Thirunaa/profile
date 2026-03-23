import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { memberships } from '../utils/siteData';

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

export default function Memberships() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Community & Organisations" title="Memberships" />

          {memberships.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 12,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
              }}
            >
              <GroupsIcon sx={{ fontSize: 56, color: '#333333', mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>Memberships Coming Soon</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>Professional affiliations and community roles will appear here.</Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {memberships.map((m, i) => (
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
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: 40, height: 40, borderRadius: 2,
                            background: 'rgba(255,197,0,0.08)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <GroupsIcon sx={{ color: '#ffc500', fontSize: 20 }} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', fontSize: '1rem', lineHeight: 1.4 }}>
                              {m.org}
                            </Typography>
                            {m.badge && (
                              <Chip
                                label={`★ ${m.badge}`}
                                size="small"
                                sx={{
                                  background: 'rgba(255,197,0,0.12)',
                                  color: '#ffc500',
                                  border: '1px solid rgba(255,197,0,0.3)',
                                  fontSize: '0.68rem',
                                  height: 20,
                                }}
                              />
                            )}
                          </Box>
                          <Typography variant="caption" sx={{ color: '#ffc500', fontSize: '0.75rem' }}>
                            {m.role} · Since {m.since}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75 }}>
                        {m.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
}
