import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { media } from '../utils/siteData';

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

const TYPE_COLORS = {
  article: { bg: 'rgba(99,102,241,0.1)', color: '#818cf8' },
  podcast: { bg: 'rgba(16,185,129,0.1)', color: '#34d399' },
  video: { bg: 'rgba(239,68,68,0.1)', color: '#f87171' },
  interview: { bg: 'rgba(255,197,0,0.1)', color: '#ffc500' },
};

export default function Media() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Press & Features" title="Media" />

          {media.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 12,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
              }}
            >
              <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>📰</Typography>
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>No Media Features Yet</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>
                Press mentions, interviews, and podcast appearances will appear here.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {media.map((item, i) => {
                const colors = TYPE_COLORS[item.type] || TYPE_COLORS.article;
                return (
                  <Grid item xs={12} md={6} key={i}>
                    <Card
                      sx={{
                        background: '#0f0f0f', border: '1px solid #1a1a1a',
                        borderRadius: 3, height: '100%',
                        '&:hover': { borderColor: '#2a2a2a' },
                        transition: 'border-color 0.2s ease',
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Chip
                            label={item.type}
                            size="small"
                            sx={{ background: colors.bg, color: colors.color, fontSize: '0.72rem', textTransform: 'capitalize' }}
                          />
                          <Typography variant="caption" sx={{ color: '#555555' }}>{item.date}</Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', mb: 1, fontSize: '1rem', lineHeight: 1.4 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ffc500', mb: 0.5, fontSize: '0.82rem' }}>
                          {item.outlet}
                        </Typography>
                        {item.author && (
                          <Typography variant="body2" sx={{ color: '#666666', mb: 1.5, fontSize: '0.78rem' }}>
                            By {item.author}
                          </Typography>
                        )}
                        {item.summary && (
                          <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.7, mb: 2, fontSize: '0.82rem' }}>
                            {item.summary}
                          </Typography>
                        )}
                        {item.link && (
                          <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            endIcon={<OpenInNewIcon fontSize="small" />}
                            component="a"
                            href={item.link}
                            target="_blank"
                          >
                            Read More
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
}
