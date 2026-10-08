import { useLocation, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

/**
 * PageTransition & Navigation Progress Bar
 * Provides butter-smooth page entry animations, staggered section reveals,
 * and an elegant ambient progress indicator on route changes.
 */
export function PageTransition({ children }) {
  const location = useLocation();
  const routerState = useRouterState();
  const [navigating, setNavigating] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const containerRef = useRef(null);

  // Detect route change and trigger smooth scroll to top & progress pulse
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setNavigating(true);

      // Scroll to top on navigation
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const timer = setTimeout(() => {
        setNavigating(false);
      }, 420);

      // Animate child sections sequentially on navigation
      const el = containerRef.current;
      if (el && document.documentElement.classList.contains('site-ready')) {
        const contentChild = el.querySelector('.content');
        if (contentChild) {
          const sections = Array.from(contentChild.children);
          if (sections.length) {
            gsap.fromTo(
              sections,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.06,
                duration: 0.5,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              }
            );
          }
        }
      }

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const isPending = routerState?.status === 'pending' || navigating;

  return (
    <>
      {/* Top ambient navigation progress line */}
      <div
        className={`route-progress-bar ${isPending ? 'is-active' : ''}`}
        aria-hidden="true"
      />

      {/* Animated page wrapper keyed by current path */}
      <div ref={containerRef} key={location.pathname} className="page-transition-wrap">
        {children}
      </div>
    </>
  );
}
