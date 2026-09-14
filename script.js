/* =========================================
   INNOVENTIX HUB — Interactions v2
   ========================================= */

(function () {
  'use strict';

  // ---------- YouTube Shorts data (marquee order) ----------
  const SHORTS = [
    '3-PuCBGkI_I','E02ClYrTJdk','VIbDM1AbB4E','-2Tx14I5o1I',
    'xWf4itxXMDI','OyFjwMt-bf8','_Bkbsy8ncWw','FH0YX9Wyrqc',
    'f-iTa9hzn-A','zpKyVkxVsow','NqfkH4wpMxo','UTOrBQsziPY',
    'rBQX8lc8WaI','_w1qyGfVQ4Q','ZMKo7548PEU','OvS8cCPnmIs',
    'tacQT-oEY0E','5rM5q2Gm2FM','Y_ndM-GtxFg','cv4cZ3mrLpI',
    'av2EYSU3Abc','Bc3G4jGC81w','lWErNm0Gr5A'
  ];

  // ---------- Build shorts marquee ----------
  const shortsTrack = document.getElementById('shortsTrack');
  if (shortsTrack) {
    function buildShort(id) {
      const wrap = document.createElement('div');
      wrap.className = 'short-card';
      wrap.dataset.videoId = id;
      wrap.innerHTML = `
        <img class="short-thumb" src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="AI UGC short" loading="lazy" />
        <span class="short-overlay"></span>
        <span class="play-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
        </span>
      `;
      // Auto-remove ONLY if YouTube returned the exact "video unavailable"
      // placeholder (120x90). Never remove on network/CORS errors — those
      // fire in preview contexts too and shouldn't wipe the marquee.
      const thumb = wrap.querySelector('img');
      thumb.addEventListener('load', () => {
        if (thumb.naturalWidth === 120 && thumb.naturalHeight === 90) {
          wrap.remove();
        }
      });
      wrap.addEventListener('click', () => {
        if (wrap.querySelector('iframe')) return;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
        iframe.title = 'AI UGC Short';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        wrap.innerHTML = '';
        wrap.appendChild(iframe);
      });
      return wrap;
    }
    const frag = document.createDocumentFragment();
    [...SHORTS, ...SHORTS].forEach(id => frag.appendChild(buildShort(id)));
    shortsTrack.appendChild(frag);
  }

  // ---------- Tool brand logos ----------
  const TOOLS = [
    { name: 'Higgsfield',      img: 'assets/tools/higgsfield.png' },
    { name: 'Kling',           img: 'assets/tools/kling.png' },
    { name: 'Veo3 Omni Flash', img: 'assets/tools/veo.png' },
    { name: 'Claude',          img: 'assets/tools/claude.png' },
    { name: 'GPT',             img: 'assets/tools/gpt.png' },
    { name: 'Nano Banana',     img: 'assets/tools/nano-banana.png' },
    { name: 'ElevenLabs',      img: 'assets/tools/elevenlabs.png' },
  ];

  const toolsTrack = document.getElementById('toolsTrack');
  if (toolsTrack) {
    function buildTool(t) {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <div class="tool-card-inner">
          <div class="tool-logo"><img src="${t.img}" alt="${t.name} logo" loading="lazy" /></div>
          <div class="tool-name">${t.name}</div>
        </div>
      `;
      return card;
    }
    const frag = document.createDocumentFragment();
    [...TOOLS, ...TOOLS, ...TOOLS].forEach(t => frag.appendChild(buildTool(t)));
    toolsTrack.appendChild(frag);
  }

  // ---------- Hero: match Line-2 width to Line-1 exactly ----------
  function fitHeroLines() {
    const h1 = document.querySelector('.hero h1');
    if (!h1) return;
    const line1 = h1.querySelector('.line-1');
    const line2 = h1.querySelector('.line-2');
    if (!line1 || !line2) return;

    // If we're in mobile mode (lines wrap normally), don't force fit.
    if (window.innerWidth <= 820) {
      line2.style.fontSize = '';
      return;
    }

    // Reset to CSS-defined size first so we always measure the base.
    line2.style.fontSize = '';
    // Force layout
    const w1 = line1.getBoundingClientRect().width;
    const w2 = line2.getBoundingClientRect().width;
    if (!w1 || !w2) return;
    const fs2 = parseFloat(getComputedStyle(line2).fontSize);
    // New size that makes Line-2's rendered width equal to Line-1's
    const newSize = fs2 * (w1 / w2);
    line2.style.fontSize = newSize.toFixed(2) + 'px';
  }
  // Run after fonts are ready, on resize, and once at load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeroLines);
  }
  window.addEventListener('load', fitHeroLines);
  let fitTimer;
  window.addEventListener('resize', () => {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(fitHeroLines, 80);
  });
  // Also fit immediately in case fonts are already cached
  fitHeroLines();

  // ---------- Scroll-triggered reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay, 10) || 0;
          setTimeout(() => el.classList.add('is-visible'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Nav scrolled state ----------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile nav toggle ----------
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Smooth-scroll for anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

})();
