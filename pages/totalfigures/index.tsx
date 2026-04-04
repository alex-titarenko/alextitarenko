import Head from 'next/head';
import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';
import appConfig from 'app.config.json';
import { createUseStyles } from 'react-jss';

const grayBg = '#f8f8f6';
const textDark = '#1a1a2e';
const textMuted = '#64748b';

const useStyles = createUseStyles({
  '@global': {
    '@keyframes fadeUp': {
      from: { opacity: 0, transform: 'translateY(40px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-12px)' },
    },
    'header': {
      position: 'fixed !important',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderColor: 'rgba(0, 0, 0, 0.06) !important',
    },
    'footer': {
      marginTop: '0 !important',
    },
  },

  page: {
    '--brand-l': '0.72',
    '--brand-c': '0.14',
    '--brand-h': '200',
    '--brand': 'oklch(var(--brand-l) var(--brand-c) var(--brand-h))',
    '--brand-light': 'oklch(calc(var(--brand-l) + 0.08) var(--brand-c) var(--brand-h))',
    '--brand-bg': 'oklch(var(--brand-l) var(--brand-c) var(--brand-h) / 0.08)',
    '--brand-bg-strong': 'oklch(var(--brand-l) var(--brand-c) var(--brand-h) / 0.15)',
    '--brand-shadow': 'oklch(var(--brand-l) var(--brand-c) var(--brand-h) / 0.3)',

    fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: textDark,
  },

  // ─── Hero ───
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 24px 80px',
    position: 'relative',
    background: 'radial-gradient(ellipse 80% 60% at 50% -10%, var(--brand-bg) 0%, transparent 70%), #ffffff',

    '@media (max-width: 768px)': {
      minHeight: 'auto',
      padding: '100px 20px 60px',
    },
  },
  heroInner: {
    maxWidth: 900,
    margin: '0 auto',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 20px',
    borderRadius: 100,
    background: 'var(--brand-bg)',
    color: 'var(--brand)',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.02em',
    marginBottom: 32,
    animation: 'fadeIn 1s ease both',
  },
  heroBadgeDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'var(--brand)',
  },
  heroTitle: {
    fontSize: 72,
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    color: textDark,
    margin: '0 0 24px',
    animation: 'fadeUp 1s 0.15s ease both',

    '@media (max-width: 768px)': {
      fontSize: 40,
    },
  },
  heroTitleAccent: {
    background: 'linear-gradient(135deg, var(--brand), var(--brand-light))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: 20,
    lineHeight: 1.7,
    color: textMuted,
    maxWidth: 560,
    margin: '0 auto 48px',
    animation: 'fadeUp 1s 0.3s ease both',

    '@media (max-width: 768px)': {
      fontSize: 17,
    },
  },
  heroImage: {
    animation: 'fadeUp 1s 0.5s ease both',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1000,
    margin: '0 auto',

    '& img': {
      width: '100%',
      height: 'auto',
      display: 'block',
    },

    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  },

  // ─── Features Grid ───
  featuresSection: {
    padding: '120px 24px',
    background: grayBg,

    '@media (max-width: 768px)': {
      padding: '80px 20px',
    },
  },
  sectionInner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  sectionLabel: {
    display: 'inline-block',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--brand)',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    color: textDark,
    margin: '0 0 16px',

    '@media (max-width: 768px)': {
      fontSize: 30,
    },
  },
  sectionSubtitle: {
    fontSize: 18,
    lineHeight: 1.7,
    color: textMuted,
    maxWidth: 520,
    margin: '0 0 64px',

    '@media (max-width: 768px)': {
      fontSize: 16,
      marginBottom: 40,
    },
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32,

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: 24,
    },
  },
  featureCard: {
    padding: '36px 32px',
    borderRadius: 20,
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 40px -8px rgba(0,0,0,0.1)',
    },
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--brand-bg)',
    color: 'var(--brand)',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: textDark,
    margin: '0 0 10px',
    lineHeight: 1.3,
  },
  featureDesc: {
    fontSize: 15,
    lineHeight: 1.7,
    color: textMuted,
    margin: 0,
  },

  // ─── Deep Dive Sections ───
  deepDiveSection: {
    padding: '100px 24px',

    '&:nth-child(odd)': {
      background: grayBg,
    },
    '&:nth-child(even)': {
      background: '#ffffff',
    },

    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  deepDiveInner: {
    maxWidth: 1000,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'center',

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: 40,
      textAlign: 'center',
    },
  },
  deepDiveReversed: {
    '& > *:first-child': {
      order: 2,
    },
    '& > *:last-child': {
      order: 1,
    },

    '@media (max-width: 768px)': {
      '& > *:first-child': {
        order: 1,
      },
      '& > *:last-child': {
        order: 2,
      },
    },
  },
  deepDiveContent: {},
  deepDiveLabel: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--brand)',
    marginBottom: 12,
  },
  deepDiveTitle: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: textDark,
    margin: '0 0 16px',

    '@media (max-width: 768px)': {
      fontSize: 28,
    },
  },
  deepDiveText: {
    fontSize: 16,
    lineHeight: 1.8,
    color: textMuted,
    margin: 0,
  },
  deepDiveVisual: {
    display: 'flex',
    justifyContent: 'center',
  },
  deepDiveIcon: {
    width: 200,
    height: 200,
    borderRadius: 40,
    background: 'linear-gradient(135deg, var(--brand-bg), var(--brand-bg-strong))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--brand)',
    boxShadow: '0 12px 40px -10px var(--brand-bg)',

    '@media (max-width: 768px)': {
      width: 140,
      height: 140,
      borderRadius: 30,
    },
  },

  // ─── CTA Section ───
  ctaSection: {
    padding: '120px 24px',
    background: 'radial-gradient(ellipse 80% 60% at 50% 110%, var(--brand-bg) 0%, transparent 70%), #ffffff',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      padding: '80px 20px',
    },
  },
  ctaTitle: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    color: textDark,
    margin: '0 0 16px',

    '@media (max-width: 768px)': {
      fontSize: 32,
    },
  },
  ctaSubtitle: {
    fontSize: 18,
    lineHeight: 1.7,
    color: textMuted,
    maxWidth: 480,
    margin: '0 auto 40px',
  },
  ctaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 32px',
    borderRadius: 100,
    background: textDark,
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '0.01em',
    marginBottom: 32,
  },
  ctaApple: {
    fontSize: 22,
  },
  privacyLink: {
    display: 'inline-block',
    fontSize: 14,
    color: textMuted,
    textDecoration: 'none',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    paddingBottom: 2,
    transition: 'color 0.2s ease, border-color 0.2s ease',

    '&:hover': {
      color: 'var(--brand)',
      borderColor: 'var(--brand)',
      textDecoration: 'none',
    },
  },
});

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 4 5-9" />
  </svg>
);
const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const IconTag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const features = [
  {
    icon: <IconShield />,
    title: 'Privacy First',
    desc: 'All data stays on your device and in your personal iCloud. No third-party servers, no tracking, no compromises.',
  },
  {
    icon: <IconChart />,
    title: 'Net Worth Tracking',
    desc: 'Track every asset and liability. See your total net worth at a glance and watch it grow over time.',
  },
  {
    icon: <IconMail />,
    title: 'Auto Balance Updates',
    desc: 'Automatically extract balances from your daily bank emails using Apple Shortcuts. No manual entry needed.',
  },
  {
    icon: <IconUsers />,
    title: 'Built for Households',
    desc: 'Share a profile with your partner or family. Collaborate with privacy controls for surprise purchases.',
  },
  {
    icon: <IconGlobe />,
    title: 'Multi-Currency',
    desc: 'Track finances across different currencies. International accounts and travel handled naturally.',
  },
  {
    icon: <IconTag />,
    title: 'Smart Transactions',
    desc: 'Flexible categorization, custom tags, merchant tracking, and powerful search with instant filters.',
  },
];

export default function TotalFiguresPage() {
  const classes = useStyles();

  return (
    <Layout
      title="TotalFigures — Net Worth &amp; Finance Tracker"
      description="Track your complete financial picture. Monitor assets, liabilities, and transactions — all in one private, beautifully designed app."
      pageId="totalfigures"
      canonicalUrl={`${appConfig.canonicalBaseUrl}totalfigures`}
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @keyframes scrollFadeUp {
            from { opacity: 0; transform: translateY(120px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .scroll-reveal {
            animation-name: scrollFadeUp;
            animation-duration: 1ms;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-timeline: view();
            animation-range: entry 0% cover 30%;
          }
        `}</style>
      </Head>

      <div className={classes.page}>
        {/* ─── Hero ─── */}
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <div className={classes.heroBadge}>
              <span className={classes.heroBadgeDot} />
              Coming Soon
            </div>
            <h1 className={classes.heroTitle}>
              Your complete<br />
              <span className={classes.heroTitleAccent}>financial picture.</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Track every asset, liability, and transaction in one private,
              beautifully designed app. Your finances, your iCloud, your control.
            </p>
            <div className={classes.heroImage}>
              <img
                src="/images/totalfigures/hero.webp"
                alt="TotalFigures app showing Net Worth and Activities screens"
              />
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section className={classes.featuresSection}>
          <div className={classes.sectionInner}>
            <div className="scroll-reveal">
              <div className={classes.sectionLabel}>Features</div>
              <h2 className={classes.sectionTitle}>Everything you need.<br />Nothing you don&apos;t.</h2>
              <p className={classes.sectionSubtitle}>
                Designed to give you clarity and control over your finances without complexity.
              </p>
            </div>
            <div className={classes.featuresGrid}>
              {features.map((f) => (
                <div
                  key={f.title}
                  className={`${classes.featureCard} scroll-reveal`}
                >
                  <div className={classes.featureIcon}>{f.icon}</div>
                  <h3 className={classes.featureTitle}>{f.title}</h3>
                  <p className={classes.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Auto Updates ─── */}
        <section className={classes.deepDiveSection} style={{ background: '#ffffff' }}>
          <div className={`${classes.deepDiveInner} scroll-reveal`}>
            <div className={classes.deepDiveContent}>
              <div className={classes.deepDiveLabel}>Automation</div>
              <h2 className={classes.deepDiveTitle}>Effortless balance updates</h2>
              <p className={classes.deepDiveText}>
                TotalFigures uses Apple Shortcuts to automatically extract balances and
                estimates from your daily bank and financial emails — right on your device.
                Support for Chase, Fidelity, Redfin, and more.
              </p>
            </div>
            <div className={classes.deepDiveVisual}>
              <div className={classes.deepDiveIcon}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Households ─── */}
        <section className={classes.deepDiveSection} style={{ background: grayBg }}>
          <div className={`${classes.deepDiveInner} ${classes.deepDiveReversed} scroll-reveal`}>
            <div className={classes.deepDiveContent}>
              <div className={classes.deepDiveLabel}>Collaboration</div>
              <h2 className={classes.deepDiveTitle}>Built for households</h2>
              <p className={classes.deepDiveText}>
                Share a profile with your partner or family. Collaborate on household
                finances with privacy controls — temporarily hide gift purchases and
                surprise expenses until you&apos;re ready to reveal them.
              </p>
            </div>
            <div className={classes.deepDiveVisual}>
              <div className={classes.deepDiveIcon}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Privacy ─── */}
        <section className={classes.deepDiveSection} style={{ background: '#ffffff' }}>
          <div className={`${classes.deepDiveInner} scroll-reveal`}>
            <div className={classes.deepDiveContent}>
              <div className={classes.deepDiveLabel}>Security</div>
              <h2 className={classes.deepDiveTitle}>Privacy first. Always.</h2>
              <p className={classes.deepDiveText}>
                All your data stays in your personal iCloud account. No third-party
                servers, no tracking, no compromises. Your finances are yours alone.
                Import and export in standard formats — CSV, OFX, QIF, and more.
              </p>
            </div>
            <div className={classes.deepDiveVisual}>
              <div className={classes.deepDiveIcon}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={classes.ctaSection}>
          <div className="scroll-reveal">
            <h2 className={classes.ctaTitle}>Coming soon.</h2>
            <p className={classes.ctaSubtitle}>
              TotalFigures is being crafted with care and will be available on the App Store soon.
            </p>
            <div className={classes.ctaBadge}>
              <span className={classes.ctaApple}></span>
              Available soon on the App Store
            </div>
            <br />
            <Link href="/totalfigures/privacy-policy" className={classes.privacyLink}>
              Privacy Policy
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
