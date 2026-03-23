import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { achievements } from '../utils/siteData';

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

export default function Achievements() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Honours, Milestones & Intellectual Work" title="Major Work" />

          {achievements.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 12,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 56, color: '#333333', mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>Achievements Coming Soon</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>Content is being compiled.</Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {achievements.map((a, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Card
                    sx={{
                      background: '#0f0f0f',
                      border: '1px solid #1a1a1a',
                      borderRadius: 3,
                      height: '100%',
                      '&:hover': { borderColor: 'rgba(255,197,0,0.3)' },
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: 40, height: 40, borderRadius: 2,
                            background: 'rgba(255,197,0,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <EmojiEventsIcon sx={{ color: '#ffc500', fontSize: 20 }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', fontSize: '1rem', lineHeight: 1.4 }}>
                            {a.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#ffc500', fontSize: '0.75rem' }}>
                            {a.issuer} · {a.year}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75, mb: a.credentialUrl || a.verifyNote ? 2 : 0 }}>
                        {a.description}
                      </Typography>
                      {a.verifyNote && (
                        <Typography variant="caption" sx={{ color: '#555555', fontStyle: 'italic', display: 'block', mb: a.credentialUrl ? 1.5 : 0 }}>
                          {a.verifyNote}
                        </Typography>
                      )}
                      {a.credentialUrl && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="primary"
                          endIcon={<OpenInNewIcon fontSize="inherit" />}
                          component="a"
                          href={a.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ fontSize: '0.75rem' }}
                        >
                          Verify
                        </Button>
                      )}
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
