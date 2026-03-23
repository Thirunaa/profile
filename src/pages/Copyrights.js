import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { copyrights } from '../utils/siteData';

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
  Copyright: { bg: 'rgba(99,102,241,0.1)', color: '#818cf8', border: 'rgba(99,102,241,0.25)' },
  Patent: { bg: 'rgba(255,197,0,0.08)', color: '#ffc500', border: 'rgba(255,197,0,0.2)' },
};

export default function Copyrights() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Intellectual Property" title="Copyrights & Patents" />

          {copyrights.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 12,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
              }}
            >
              <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>⚖️</Typography>
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>No IP Filings Yet</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>Copyright and patent filings will appear here.</Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {copyrights.map((item, i) => {
                const typeStyle = TYPE_COLORS[item.type] || TYPE_COLORS.Copyright;
                return (
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
                      {/* Header row */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', mb: 1 }}>
                            <Chip
                              label={item.type}
                              size="small"
                              sx={{
                                background: typeStyle.bg,
                                color: typeStyle.color,
                                border: `1px solid ${typeStyle.border}`,
                                fontSize: '0.68rem',
                              }}
                            />
                            <Chip
                              label={item.country}
                              size="small"
                              sx={{
                                background: 'rgba(255,255,255,0.04)',
                                color: '#777777',
                                border: '1px solid #252525',
                                fontSize: '0.68rem',
                              }}
                            />
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', lineHeight: 1.4 }}>
                            {item.title}
                          </Typography>
                        </Box>
                        {item.link && (
                          <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            endIcon={<OpenInNewIcon fontSize="small" />}
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ flexShrink: 0 }}
                          >
                            View Filing
                          </Button>
                        )}
                      </Box>

                      {/* Meta */}
                      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 2 }}>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                            Issuing Office
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffc500', fontSize: '0.82rem' }}>
                            {item.office}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                            {item.type.startsWith('Patent') ? 'Application No.' : 'File Number'}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.82rem', fontFamily: 'monospace' }}>
                            {item.fileNumber}
                          </Typography>
                        </Box>
                        {item.patentCenterNo && (
                          <Box>
                            <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                              Patent Center #
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.82rem', fontFamily: 'monospace' }}>
                              {item.patentCenterNo}
                            </Typography>
                          </Box>
                        )}
                        {item.docket && (
                          <Box>
                            <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                              Docket
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.82rem', fontFamily: 'monospace' }}>
                              {item.docket}
                            </Typography>
                          </Box>
                        )}
                        {item.filedDate && (
                          <Box>
                            <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                              Filed
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.82rem' }}>
                              {item.filedDate}
                            </Typography>
                          </Box>
                        )}
                        {item.status && (
                          <Box>
                            <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                              Status
                            </Typography>
                            <Typography variant="body2" sx={{
                              fontSize: '0.82rem',
                              color: item.status === 'Pending' ? '#fbbf24' : '#34d399',
                              fontWeight: 600,
                            }}>
                              {item.status}
                            </Typography>
                          </Box>
                        )}
                        <Box>
                          <Typography variant="caption" sx={{ color: '#555555', display: 'block', fontSize: '0.72rem' }}>
                            Inventor / Author
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.82rem' }}>
                            {item.author}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Abstract */}
                      {item.abstract && (
                        <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75 }}>
                          {item.abstract}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
