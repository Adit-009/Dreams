import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import gsap from 'gsap';

/**
 * Universal Reveal Animation Manager
 * Applies the signature DREAMS reveal animation (smooth vertical lift + scale spring + stagger)
 * to all elements across the entire website on scroll and route changes.
 */
export function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let observer;
    let cancelled = false;

    const setupObserver = () => {
      if (cancelled) return;

      // Make sure the site has finished the splash screen before running scroll reveals
      if (!document.documentElement.classList.contains('site-ready')) {
        return;
      }

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              observer.unobserve(el);

              if (el.getAttribute('data-revealed') === 'true') {
                return;
              }
              el.setAttribute('data-revealed', 'true');

              animateElement(el);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      // Select all candidate elements across the current page
      const selectors = [
        '.section-title:not([data-revealed="true"])',
        '.product-grid:not([data-revealed="true"])',
        '.category-grid:not([data-revealed="true"])',
        '.promo-band:not([data-revealed="true"])',
        '.trust-strip:not([data-revealed="true"])',
        '.instagram-section:not([data-revealed="true"])',
        '.page-title:not([data-revealed="true"])',
        '.detail-layout:not([data-revealed="true"])',
        '.filter-row:not([data-revealed="true"])',
        '.listing-meta:not([data-revealed="true"])',
        '.empty-state:not([data-revealed="true"])',
        '.footer-inner:not([data-revealed="true"])',
        '.welcome-copy:not([data-revealed="true"])',
        '.reveal-item:not([data-revealed="true"])',
      ];

      const elements = document.querySelectorAll(selectors.join(', '));
      elements.forEach((el) => {
        // Set initial invisible state for elements below the fold
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          // If already in viewport (e.g. on route change after splash is ready), animate promptly
          el.setAttribute('data-revealed', 'true');
          animateElement(el);
        } else {
          // Pre-hide element slightly to guarantee no flash before animation triggers
          gsap.set(el, { opacity: 0, y: 30 });
          observer.observe(el);
        }
      });
    };

    const animateElement = (el) => {
      // 1. Grid of product cards
      if (el.classList.contains('product-grid')) {
        const cards = el.querySelectorAll('.product-card');
        if (cards.length) {
          gsap.fromTo(
            cards,
            { y: 38, scale: 0.94, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.65,
              stagger: 0.07,
              ease: 'back.out(1.4)',
              clearProps: 'transform,opacity',
            }
          );
        }
        gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      // 2. Grid of category cards
      if (el.classList.contains('category-grid')) {
        const cards = el.querySelectorAll('.category-card');
        if (cards.length) {
          gsap.fromTo(
            cards,
            { y: 38, scale: 0.94, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.65,
              stagger: 0.07,
              ease: 'back.out(1.4)',
              clearProps: 'transform,opacity',
            }
          );
        }
        gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      // 3. Trust strip with icons
      if (el.classList.contains('trust-strip')) {
        const items = el.querySelectorAll(':scope > div');
        if (items.length) {
          gsap.fromTo(
            items,
            { y: 25, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            }
          );
        }
        gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      // 4. Instagram section (header + photo cards)
      if (el.classList.contains('instagram-section')) {
        const header = el.querySelector('.instagram-header');
        const cards = el.querySelectorAll('.instagram-card');
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (header) {
          tl.fromTo(header, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, clearProps: 'transform,opacity' });
        }
        if (cards.length) {
          tl.fromTo(
            cards,
            { y: 32, scale: 0.94, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.65,
              stagger: 0.07,
              ease: 'back.out(1.4)',
              clearProps: 'transform,opacity',
            },
            '-=0.3'
          );
        }
        gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      // 5. Promo band banner
      if (el.classList.contains('promo-band')) {
        gsap.fromTo(
          el,
          { y: 35, scale: 0.96, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: 'back.out(1.3)',
            clearProps: 'transform,opacity',
          }
        );
        return;
      }

      // 6. Product detail layout
      if (el.classList.contains('detail-layout')) {
        const photo = el.querySelector('.detail-photo');
        const info = el.querySelector('.detail-info');
        if (photo && info) {
          gsap.fromTo(
            [photo, info],
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            }
          );
        }
        return;
      }

      // 7. Footer inner columns
      if (el.classList.contains('footer-inner')) {
        const cols = el.querySelectorAll(':scope > div');
        if (cols.length) {
          gsap.fromTo(
            cols,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            }
          );
        }
        return;
      }

      // 8. General section titles, page titles, empty states, etc.
      gsap.fromTo(
        el,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        }
      );
    };

    // Poll until site-ready is active (meaning splash screen is lifting)
    const checkInterval = setInterval(() => {
      if (document.documentElement.classList.contains('site-ready')) {
        clearInterval(checkInterval);
        // Small delay to allow initial splash entrance timeline to claim above-the-fold elements
        setTimeout(setupObserver, 200);
      }
    }, 80);

    return () => {
      cancelled = true;
      clearInterval(checkInterval);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
