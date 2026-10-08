import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HOLD_S = 3;

// Rendered on the server too, so the splash covers the page from the first paint.
// The site stays hidden (html:not(.site-ready)) until the splash lifts, then elements make their entries.
export function SplashScreen() {
  const [gone, setGone] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      /* ── Phase 1: Ambient entrance ── */
      tl.fromTo('.splash-glow', { scale: 0.4, opacity: 0 }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      })

        /* ── Phase 2: Logo glow + emblem entrance ── */
        .fromTo(
          '.splash-logo-glow',
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.8'
        )
        .fromTo(
          '.splash-emblem',
          { y: 30, scale: 0.7, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'back.out(1.7)',
          },
          '-=0.6'
        )

        /* ── Phase 3: Brand text letter-by-letter ── */
        .fromTo(
          '.splash-letter',
          { y: 20, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: 'back.out(2)',
          },
          '-=0.3'
        )
        .fromTo(
          '.splash-tagline',
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.15'
        )

        /* ── Phase 4: Progress bar ── */
        .fromTo(
          '.splash-progress',
          { opacity: 0, scaleX: 0.5 },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .fromTo(
          '.splash-progress-fill',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: HOLD_S - 0.8,
            ease: 'power1.inOut',
          },
          '<'
        )

        /* ── Phase 5: Collapse & exit ── */
        .to(
          '.splash-center',
          {
            scale: 0.92,
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: 'power3.in',
          },
          '+=0.15'
        )
        .to(
          '.splash-glow',
          {
            scale: 2.5,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          el,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.9,
            ease: 'power4.inOut',
          },
          '-=0.25'
        )

        /* ── Phase 6: Trigger site entrance ── */
        .add(() => {
          document.documentElement.classList.add('site-ready');
          const q = (s) => document.querySelectorAll(s);
          const markRevealed = (elements) => {
            elements.forEach((node) => node.setAttribute('data-revealed', 'true'));
          };

          const et = gsap.timeline({
            defaults: { ease: 'power3.out' },
            onComplete: () => {
              const allAnimated = document.querySelectorAll(
                '.site-header, .site-header .brand, .site-header .desktop-search, .site-header .header-action, ' +
                '.hero, .hero img, .hero-content > *, .hero-label, .category-shortcuts .shortcut, ' +
                '.home-content > .section-title, .product-card, .bottom-nav, .bottom-nav a, [data-revealed="true"]'
              );
              if (allAnimated.length) gsap.set(allAnimated, { clearProps: 'transform,opacity' });
            },
          });

          // 1. Header & header actions
          const header = q('.site-header');
          if (header.length) {
            et.from(header, { y: -70, opacity: 0, duration: 0.65 });
          }

          const headerItems = q(
            '.site-header .brand, .site-header .desktop-search, .site-header .header-action'
          );
          if (headerItems.length) {
            et.from(headerItems, { y: -16, opacity: 0, stagger: 0.05, duration: 0.45 }, '-=0.4');
          }

          // 2. Hero image zoom + content cascade
          const heroImg = q('.hero img');
          if (heroImg.length) {
            markRevealed(heroImg);
            et.from(heroImg, { scale: 1.07, opacity: 0, duration: 0.85, ease: 'power2.out' }, '-=0.35');
          }

          const heroElements = q(
            '.hero-content .eyebrow, .hero-content h1, .hero-content p, .hero-content .hero-button, .hero-label'
          );
          if (heroElements.length) {
            markRevealed(heroElements);
            et.from(
              heroElements,
              { y: 30, scale: 0.95, opacity: 0, stagger: 0.07, duration: 0.65, ease: 'back.out(1.5)' },
              '-=0.6'
            );
          }

          // 3. Category shortcuts wave
          const shortcuts = q('.category-shortcuts .shortcut');
          if (shortcuts.length) {
            markRevealed(shortcuts);
            et.from(
              shortcuts,
              { y: 30, scale: 0.85, opacity: 0, stagger: 0.05, duration: 0.55, ease: 'back.out(1.6)' },
              '-=0.45'
            );
          }

          // 4. Section title & product cards
          const firstSectionTitle = q('.home-content > .section-title');
          if (firstSectionTitle.length) {
            markRevealed(firstSectionTitle);
            et.from(firstSectionTitle[0], { y: 24, opacity: 0, duration: 0.55 }, '-=0.35');
          }

          const productCards = q('.home-content .product-grid .product-card');
          if (productCards.length) {
            const firstCards = Array.from(productCards).slice(0, 4);
            markRevealed(firstCards);
            et.from(
              firstCards,
              { y: 38, scale: 0.94, opacity: 0, stagger: 0.08, duration: 0.65, ease: 'back.out(1.4)' },
              '-=0.35'
            );
          }

          // 5. Mobile / responsive bottom navigation
          const bottomNav = q('.bottom-nav');
          if (bottomNav.length) {
            et.from(bottomNav, { y: 70, opacity: 0, duration: 0.55 }, '-=0.55');
          }
          const bottomNavItems = q('.bottom-nav a');
          if (bottomNavItems.length) {
            et.from(bottomNavItems, { y: 16, opacity: 0, stagger: 0.04, duration: 0.4 }, '-=0.4');
          }
        }, '-=0.45')
        .add(() => setGone(true));
    }, el);
    return () => ctx.revert();
  }, []);

  if (gone) return null;

  const letters = 'DREAMS'.split('');

  return (
    <div
      ref={root}
      className="splash"
      role="status"
      aria-label="Loading DREAMS"
      style={{ clipPath: 'inset(0 0 0 0)' }}
    >
      {/* Animated background pattern */}
      <div className="splash-pattern" aria-hidden="true" />

      {/* Soft ambient glow */}
      <div className="splash-glow" aria-hidden="true" style={{ opacity: 0 }} />

      {/* Main centered content */}
      <div className="splash-center">
        {/* Logo area with radial gradient background glow */}
        <div className="splash-logo-wrap">
          <div className="splash-logo-glow" aria-hidden="true" style={{ opacity: 0 }} />
          <svg
            className="splash-emblem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ opacity: 0 }}
          >
            <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
            <path d="M6 17h12" />
          </svg>
        </div>

        {/* Brand text — letter by letter */}
        <div className="splash-brand">
          {letters.map((l, i) => (
            <span key={i} className="splash-letter" style={{ opacity: 0 }}>
              {l}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <span className="splash-tagline" style={{ opacity: 0 }}>BAKING SUPPLIES & MORE</span>

        {/* Premium progress bar */}
        <div className="splash-progress" aria-hidden="true" style={{ opacity: 0 }}>
          <span className="splash-progress-fill" />
          <span className="splash-progress-shimmer" />
        </div>
      </div>
    </div>
  );
}
