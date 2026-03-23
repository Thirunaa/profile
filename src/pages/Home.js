import React, { useCallback } from 'react';
import {
  Box, Container, Typography, Grid, Chip, Avatar, Card, CardContent,
  Button, IconButton, Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { profile, experience, education, skills, recommendations, certifications } from '../utils/siteData';
import ProfilePic from '../assets/images/ProfilePic.jpeg';

/* ─── reusable section wrapper ─── */
function Section({ children, sx = {} }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, ...sx }}>
      {children}
    </Box>
  );
}

/* ─── section heading with yellow accent bar ─── */
function SectionTitle({ overline, title }) {
  return (
    <Box sx={{ mb: 6 }}>
      {overline && (
        <Typography
          variant="overline"
          sx={{ color: '#ffc500', display: 'block', mb: 1 }}
        >
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

/* ─── Hero ─── */
function PronunciationBadge() {
  const speak = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance('Theeru');
    utter.rate = 0.85;
    utter.pitch = 0.9;
    utter.volume = 1;
    // Prefer a male English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        /david|mark|daniel|alex|thomas|james|google us english male/i.test(v.name)
    ) || voices.find((v) => v.lang.startsWith('en') && !v.name.toLowerCase().includes('female'));
    if (preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  }, []);

  // Trigger voice load (needed on some browsers)
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.getVoices();
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 3,
        background: 'rgba(255,197,0,0.06)',
        border: '1px solid rgba(255,197,0,0.15)',
        borderRadius: 2,
        px: 2,
        py: 1,
      }}
    >
      <Typography variant="body2" sx={{ color: '#aaaaaa', fontSize: '0.85rem' }}>
        I usually go by{' '}
        <Box component="span" sx={{ color: '#ffc500', fontWeight: 700 }}>
          "Thiru"
        </Box>
        {' '}—{' '}
        <Box component="span" sx={{ color: '#888888', fontStyle: 'italic', letterSpacing: '0.04em' }}>
          /Thi · ru/
        </Box>
      </Typography>
      <Box
        component="button"
        onClick={speak}
        title="Hear pronunciation"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,197,0,0.1)',
          border: '1px solid rgba(255,197,0,0.2)',
          borderRadius: '50%',
          width: 28,
          height: 28,
          cursor: 'pointer',
          color: '#ffc500',
          fontSize: '0.85rem',
          flexShrink: 0,
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(255,197,0,0.2)',
            transform: 'scale(1.1)',
          },
        }}
      >
        🔊
      </Box>
    </Box>
  );
}

function HeroSection() {
  return (
    <Section sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="overline"
              sx={{ color: '#ffc500', fontSize: '0.75rem', letterSpacing: '0.2em', mb: 2, display: 'block' }}
            >
              Hi there, I'm
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.05,
                mb: 1,
              }}
            >
              Thirunaavukkarasu
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.05,
                color: '#ffc500',
                mb: 3,
              }}
            >
              Murugesan
            </Typography>
            {/* Pronunciation */}
            <PronunciationBadge />

            <Typography
              variant="h5"
              sx={{ color: '#888888', fontWeight: 400, mb: 3, fontSize: { xs: '1rem', md: '1.2rem' } }}
            >
              {profile.subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#999999', maxWidth: 560, mb: 5, lineHeight: 1.8 }}
            >
              Leading LLM evaluation, RLHF pipelines, and AI delivery at Turing. MS Computer
              Science @ Stevens Institute of Technology. 8+ years of experience across enterprise
              engineering, full-stack development, and frontier AI systems.
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
              {[
                { icon: <GitHubIcon />, href: profile.socials.github, label: 'GitHub' },
                { icon: <LinkedInIcon />, href: profile.socials.linkedin, label: 'LinkedIn' },
                { icon: <TwitterIcon />, href: profile.socials.twitter, label: 'Twitter' },
                { icon: <EmailIcon />, href: `mailto:${profile.email}`, label: 'Email' },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: '1px solid #222222',
                    color: '#888888',
                    borderRadius: 2,
                    '&:hover': {
                      color: '#ffc500',
                      borderColor: '#ffc500',
                      background: 'rgba(255,197,0,0.06)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); window.location.hash = '/portfolio'; }}
                sx={{ px: 4 }}
              >
                View Portfolio
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href={`mailto:${profile.email}`}
                sx={{ px: 4 }}
              >
                Get in Touch
              </Button>
            </Box>
          </Grid>

          {/* Photo */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Glow behind */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 260, md: 380 },
                  height: { xs: 320, md: 460 },
                  borderRadius: 4,
                  background: 'radial-gradient(circle, rgba(255,197,0,0.1) 0%, transparent 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}
              />
              <Box
                component="img"
                src={ProfilePic}
                alt="Thirunaa"
                sx={{
                  width: { xs: 240, md: 340 },
                  height: { xs: 300, md: 420 },
                  borderRadius: 4,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '2px solid #1e1e1e',
                  boxShadow: '0 0 0 6px rgba(255,197,0,0.1), 0 24px 60px rgba(0,0,0,0.5)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Stats Row */}
        <Box
          sx={{
            mt: 8,
            pt: 5,
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            gap: { xs: 4, md: 8 },
            flexWrap: 'wrap',
          }}
        >
          {profile.stats.map((stat) => (
            <Box key={stat.label}>
              <Typography
                variant="h3"
                sx={{ color: '#ffc500', fontWeight: 800, fontSize: { xs: '2rem', md: '2.5rem' } }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666666', mt: 0.5 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}

/* ─── Experience ─── */
function ExperienceSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle overline="Work History" title="Experience" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experience.map((exp, i) => (
            <Card
              key={i}
              sx={{
                background: '#0f0f0f',
                border: '1px solid #1a1a1a',
                borderRadius: 3,
                transition: 'border-color 0.2s ease',
                '&:hover': { borderColor: '#2a2a2a' },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0' }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffc500', fontWeight: 500, mt: 0.5 }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.82rem' }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#444444', fontSize: '0.78rem', mt: 0.3 }}>
                      {exp.location}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="ul"
                  sx={{ pl: 2.5, m: 0, mb: 3, listStyle: 'none', '& li': { position: 'relative', pl: 1.5 } }}
                >
                  {exp.description.map((line, j) => (
                    <Box
                      key={j}
                      component="li"
                      sx={{
                        color: '#888888',
                        fontSize: '0.875rem',
                        lineHeight: 1.75,
                        mb: 0.75,
                        '&::before': {
                          content: '"—"',
                          position: 'absolute',
                          left: -16,
                          color: '#333333',
                        },
                      }}
                    >
                      {line}
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {exp.tags.map((tag) => (
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
      </Container>
    </Section>
  );
}

/* ─── About / Full Bio ─── */
function AboutSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle overline="About Me" title="Who I Am" />
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            {profile.bio.split('\n\n').map((para, i) => (
              <Typography
                key={i}
                variant="body1"
                sx={{ color: '#999999', lineHeight: 1.9, mb: 3, fontSize: '0.95rem' }}
              >
                {para}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="overline" sx={{ color: '#ffc500', display: 'block', mb: 2 }}>
                  Quick Facts
                </Typography>
                {[
                  { label: 'Current Role', value: profile.title },
                  { label: 'Location', value: profile.location },
                  { label: 'Email', value: profile.email },
                  { label: 'Focus', value: 'LLM Evaluation & RLHF' },
                ].map((f) => (
                  <Box key={f.label} sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: '#555555', display: 'block', mb: 0.25 }}>
                      {f.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cccccc', fontSize: '0.85rem' }}>
                      {f.value}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

/* ─── Education ─── */
function EducationSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle overline="Academic Background" title="Education & Certifications" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
          {education.map((edu, i) => (
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
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#f0f0f0' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffc500', fontWeight: 500, mt: 0.5 }}>
                      {edu.institution}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.82rem' }}>
                      {edu.period}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#444444', fontSize: '0.78rem', mt: 0.3 }}>
                      {edu.location}
                    </Typography>
                  </Box>
                </Box>
                <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none', mb: edu.credentialUrl ? 2 : 0 }}>
                  {edu.details.map((d, j) => (
                    <Box
                      key={j}
                      component="li"
                      sx={{
                        color: '#888888',
                        fontSize: '0.875rem',
                        lineHeight: 1.75,
                        mb: 0.5,
                        display: 'flex',
                        gap: 1.5,
                        '&::before': { content: '"·"', color: '#ffc500', flexShrink: 0 },
                      }}
                    >
                      {d}
                    </Box>
                  ))}
                </Box>
                {edu.credentialUrl && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      component="a"
                      href={edu.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '0.75rem' }}
                    >
                      Verify Credential
                    </Button>
                    {edu.credentialId && (
                      <Typography variant="caption" sx={{ color: '#444444' }}>
                        ID: {edu.credentialId}
                      </Typography>
                    )}
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Certifications */}
        <Typography variant="overline" sx={{ color: '#ffc500', display: 'block', mb: 3 }}>
          Licenses & Certifications
        </Typography>
        <Grid container spacing={2}>
          {certifications.map((cert, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Card sx={{
                background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 3,
                '&:hover': { borderColor: 'rgba(255,197,0,0.25)' }, transition: 'border-color 0.2s ease',
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: '#f0f0f0', mb: 0.5 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ffc500', fontSize: '0.82rem', mb: 0.5 }}>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#555555', display: 'block', mb: cert.credentialUrl ? 2 : 0 }}>
                    Issued {cert.issued}{cert.expires ? ` · Expires ${cert.expires}` : ''}
                    {cert.credentialId ? ` · ID: ${cert.credentialId}` : ''}
                  </Typography>
                  {cert.credentialUrl && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      component="a"
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '0.72rem' }}
                    >
                      Show Credential
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

/* ─── Skills ─── */
function SkillsSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle overline="Capabilities" title="Technical Skills" />
        <Grid container spacing={3}>
          {skills.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.category}>
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
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: '#ffc500', display: 'block', mb: 2, fontSize: '0.7rem' }}
                  >
                    {s.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {s.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          background: '#1a1a1a',
                          color: '#cccccc',
                          border: '1px solid #252525',
                          fontSize: '0.78rem',
                          '&:hover': { background: '#222222' },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

/* ─── Location/Contact ─── */
function ContactBanner() {
  return (
    <Section sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0f0f0f 0%, #141414 100%)',
            border: '1px solid #1e1e1e',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
              Open to new opportunities
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon sx={{ color: '#ffc500', fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: '#888888' }}>
                {profile.location}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component="a"
            href={`mailto:${profile.email}`}
            endIcon={<EmailIcon />}
            sx={{ flexShrink: 0, px: 4, py: 1.5 }}
          >
            Send Email
          </Button>
        </Box>
      </Container>
    </Section>
  );
}

/* ─── Recommendations ─── */
function RecommendationsSection() {
  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle overline="Testimonials" title="What People Say" />
        <Grid container spacing={3}>
          {recommendations.map((rec, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card
                sx={{
                  background: '#0f0f0f',
                  border: '1px solid #1a1a1a',
                  borderRadius: 3,
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': { borderColor: '#2a2a2a' },
                  transition: 'border-color 0.2s ease',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <FormatQuoteIcon
                    sx={{
                      color: 'rgba(255,197,0,0.2)',
                      fontSize: 48,
                      mb: 2,
                      display: 'block',
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: '#999999', lineHeight: 1.8, mb: 4, fontStyle: 'italic', fontSize: '0.9rem' }}
                  >
                    "{rec.text}"
                  </Typography>
                  <Divider sx={{ borderColor: '#1a1a1a', mb: 3 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={rec.avatar}
                      alt={rec.name}
                      sx={{ width: 44, height: 44, border: '2px solid #222' }}
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#f0f0f0' }}>
                        {rec.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666666' }}>
                        {rec.title} · {rec.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <Box sx={{ background: '#080808', minHeight: '100vh' }}>
      <HeroSection />
      <Divider sx={{ borderColor: '#111111' }} />
      <AboutSection />
      <Divider sx={{ borderColor: '#111111' }} />
      <ExperienceSection />
      <Divider sx={{ borderColor: '#111111' }} />
      <EducationSection />
      <Divider sx={{ borderColor: '#111111' }} />
      <SkillsSection />
      <Divider sx={{ borderColor: '#111111' }} />
      <RecommendationsSection />
      <ContactBanner />
    </Box>
  );
}
