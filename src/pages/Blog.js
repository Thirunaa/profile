import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { blogs } from '../utils/siteData';

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

export default function Blog() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <SectionTitle overline="Writing" title="Blog" />

          {blogs.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center', py: 12,
                border: '1px dashed #222222', borderRadius: 3, background: '#0c0c0c',
              }}
            >
              <ArticleIcon sx={{ fontSize: 56, color: '#333333', mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#444444', mb: 1 }}>No Posts Yet</Typography>
              <Typography variant="body2" sx={{ color: '#333333' }}>
                Articles and essays will appear here.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {blogs.map((post, i) => (
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
                        <Typography variant="caption" sx={{ color: '#ffc500', fontSize: '0.75rem' }}>
                          {post.platform}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#555555' }}>{post.date}</Typography>
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0', mb: 2, fontSize: '1rem', lineHeight: 1.4 }}>
                        {post.title}
                      </Typography>
                      {post.summary && (
                        <Typography variant="body2" sx={{ color: '#888888', lineHeight: 1.75, mb: 3 }}>
                          {post.summary}
                        </Typography>
                      )}
                      {post.link && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="primary"
                          endIcon={<OpenInNewIcon fontSize="small" />}
                          component="a"
                          href={post.link}
                          target="_blank"
                        >
                          Read Article
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
