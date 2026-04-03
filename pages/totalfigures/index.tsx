import Head from 'next/head';
import Layout from 'components/Layout';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import appConfig from 'app.config.json';
import { createUseStyles } from 'react-jss';

const teal = '#14B8A6';
const tealLight = '#2DD4BF';
const tealBg = 'rgba(20, 184, 166, 0.08)';
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
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% center' },
      '100%': { backgroundPosition: '200% center' },
    },
  },

  page: {
    fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: textDark,
    overflowX: 'hidden',
  },

  // ─── Scroll Animation ───
  scrollReveal: {
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
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
    background: `
      radial-gradient(ellipse 80% 60% at 50% -10%, ${tealBg} 0%, transparent 70%),
      #ffffff
    `,

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
    background: tealBg,
    color: teal,
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
    background: teal,
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
    background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
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
  heroPhone: {
    animation: 'fadeUp 1s 0.5s ease both',
    display: 'flex',
    justifyContent: 'center',
  },
  phoneFrame: {
    width: 280,
    borderRadius: 36,
    overflow: 'hidden',
    boxShadow: 'none',
    animation: 'float 6s ease-in-out infinite',
    background: '#fff',

    '& img': {
      width: '100%',
      height: 'auto',
      display: 'block',
    },

    '@media (max-width: 768px)': {
      width: 220,
      borderRadius: 28,
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
    color: teal,
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
    background: tealBg,
    marginBottom: 20,
    fontSize: 22,
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

  // ─── Screenshots Section ───
  screenshotsSection: {
    padding: '120px 24px',
    background: '#ffffff',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      padding: '80px 20px',
    },
  },
  screenshotsGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 48,
    marginTop: 64,

    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
      marginTop: 40,
    },
  },
  screenshotItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  screenshotPhone: {
    width: 260,
    borderRadius: 32,
    overflow: 'hidden',
    boxShadow: 'none',
    background: '#fff',

    '& img': {
      width: '100%',
      height: 'auto',
      display: 'block',
    },

    '@media (max-width: 768px)': {
      width: 220,
      borderRadius: 26,
    },
  },
  screenshotPhoneOffset: {
    marginTop: 48,

    '@media (max-width: 768px)': {
      marginTop: 0,
    },
  },
  screenshotCaption: {
    fontSize: 15,
    color: textMuted,
    fontWeight: 500,
    maxWidth: 220,
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
    color: teal,
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
    background: `linear-gradient(135deg, ${tealBg}, rgba(20, 184, 166, 0.15))`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 72,
    boxShadow: `0 20px 60px -20px rgba(20, 184, 166, 0.3)`,

    '@media (max-width: 768px)': {
      width: 140,
      height: 140,
      borderRadius: 30,
      fontSize: 52,
    },
  },

  // ─── CTA Section ───
  ctaSection: {
    padding: '120px 24px',
    background: `
      radial-gradient(ellipse 80% 60% at 50% 110%, ${tealBg} 0%, transparent 70%),
      #ffffff
    `,
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
      color: teal,
      borderColor: teal,
      textDecoration: 'none',
    },
  },
});

function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay || '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

const features = [
  {
    icon: '🔒',
    title: 'Privacy First',
    desc: 'All data stays on your device and in your personal iCloud. No third-party servers, no tracking, no compromises.',
  },
  {
    icon: '📊',
    title: 'Net Worth Tracking',
    desc: 'Track every asset and liability. See your total net worth at a glance and watch it grow over time.',
  },
  {
    icon: '📧',
    title: 'Auto Balance Updates',
    desc: 'Forward your daily bank emails and balances update automatically. No manual entry needed.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Built for Households',
    desc: 'Share a profile with your partner or family. Collaborate with privacy controls for surprise purchases.',
  },
  {
    icon: '💱',
    title: 'Multi-Currency',
    desc: 'Track finances across different currencies. International accounts and travel handled naturally.',
  },
  {
    icon: '🏷️',
    title: 'Smart Transactions',
    desc: 'Flexible categorization, custom tags, merchant tracking, and powerful search with instant filters.',
  },
];

export default function TotalFiguresPage() {
  const classes = useStyles();
  const revealRef = useScrollReveal();

  return (
    <Layout
      title="TotalFigures — Net Worth &amp; Finance Tracker"
      description="Track your complete financial picture. Monitor assets, liabilities, and transactions — all in one private, beautifully designed app."
      pageId="totalfigures"
      canonicalUrl={`${appConfig.canonicalBaseUrl}totalfigures`}
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          [data-reveal] {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          [data-reveal].revealed {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </Head>

      <div className={classes.page} ref={revealRef}>
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
            <div className={classes.heroPhone}>
              <div className={classes.phoneFrame}>
                <img
                  src="/images/totalfigures/finances.webp"
                  alt="TotalFigures Net Worth screen"
                  width={280}
                  height={606}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section className={classes.featuresSection}>
          <div className={classes.sectionInner}>
            <div data-reveal>
              <div className={classes.sectionLabel}>Features</div>
              <h2 className={classes.sectionTitle}>Everything you need.<br />Nothing you don&apos;t.</h2>
              <p className={classes.sectionSubtitle}>
                Designed to give you clarity and control over your finances without complexity.
              </p>
            </div>
            <div className={classes.featuresGrid}>
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={classes.featureCard}
                  data-reveal
                  data-reveal-delay={String(i * 100)}
                >
                  <div className={classes.featureIcon}>{f.icon}</div>
                  <h3 className={classes.featureTitle}>{f.title}</h3>
                  <p className={classes.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Screenshots Showcase ─── */}
        <section className={classes.screenshotsSection}>
          <div className={classes.sectionInner}>
            <div data-reveal>
              <div className={classes.sectionLabel}>At a glance</div>
              <h2 className={classes.sectionTitle}>Designed with care.</h2>
              <p className={classes.sectionSubtitle}>
                Clean interfaces that make managing your finances feel effortless.
              </p>
            </div>
            <div className={classes.screenshotsGrid}>
              <div className={classes.screenshotItem} data-reveal data-reveal-delay="100">
                <div className={classes.screenshotPhone}>
                  <img
                    src="/images/totalfigures/finances.webp"
                    alt="Net Worth overview with balance history chart"
                    width={260}
                    height={563}
                  />
                </div>
                <span className={classes.screenshotCaption}>
                  Track your net worth with detailed balance history
                </span>
              </div>
              <div className={classes.screenshotItem} data-reveal data-reveal-delay="250">
                <div className={`${classes.screenshotPhone} ${classes.screenshotPhoneOffset}`}>
                  <img
                    src="/images/totalfigures/activities.webp"
                    alt="Activities view with categorized transactions"
                    width={260}
                    height={563}
                  />
                </div>
                <span className={classes.screenshotCaption}>
                  Categorize and search transactions instantly
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Auto Updates ─── */}
        <section className={classes.deepDiveSection} style={{ background: grayBg }}>
          <div className={classes.deepDiveInner} data-reveal>
            <div className={classes.deepDiveContent}>
              <div className={classes.deepDiveLabel}>Automation</div>
              <h2 className={classes.deepDiveTitle}>Effortless balance updates</h2>
              <p className={classes.deepDiveText}>
                Forward your daily bank emails and TotalFigures automatically updates
                your balances. Support for Chase, Redfin, Fidelity, and more — with
                intelligent matching that learns new formats over time.
              </p>
            </div>
            <div className={classes.deepDiveVisual}>
              <div className={classes.deepDiveIcon}>📧</div>
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Households ─── */}
        <section className={classes.deepDiveSection} style={{ background: '#ffffff' }}>
          <div className={`${classes.deepDiveInner} ${classes.deepDiveReversed}`} data-reveal>
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
              <div className={classes.deepDiveIcon}>👨‍👩‍👧</div>
            </div>
          </div>
        </section>

        {/* ─── Deep Dive: Privacy ─── */}
        <section className={classes.deepDiveSection} style={{ background: grayBg }}>
          <div className={classes.deepDiveInner} data-reveal>
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
              <div className={classes.deepDiveIcon}>🔒</div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={classes.ctaSection}>
          <div data-reveal>
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
