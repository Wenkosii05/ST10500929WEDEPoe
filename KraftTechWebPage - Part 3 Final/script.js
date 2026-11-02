/* ==========================================================================
    Musa Mnanzana 
    ST10500929
    WEDE POE Part 3
   ========================================================================== */

'use strict';

/* ==========================================================================
   1. UTILITIES
   ========================================================================== */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function debounce(fn, wait = 200) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}


/* ==========================================================================
   2. FOOTER YEAR — keeps copyright current automatically
   ========================================================================== */

function setFooterYear() {
  $$('.footer-bottom p').forEach(p => {
    p.textContent = p.textContent.replace(/\b\d{4}\b/, new Date().getFullYear());
  });
}


/* ==========================================================================
   3. SCROLL REVEAL — gentle fade-in as elements enter the viewport
   ========================================================================== */

function setupScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.card, .content-block, .cta-band, .info-card, .stat').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}


/* ==========================================================================
   4. BACK-TO-TOP BUTTON — appears after scrolling, smooth scrolls to top
   ========================================================================== */

function setupBackToTop() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  const toggle = () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', debounce(toggle, 100));
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ==========================================================================
   5. MOBILE MENU — JS enhancement that closes menu after link click
   ========================================================================== */

function setupMobileMenu() {
  const toggle = $('#nav-toggle');
  if (!toggle) return;

  $$('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 819px)').matches) {
        toggle.checked = false;
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.checked) toggle.checked = false;
  });
}


/* ==========================================================================
   6. DYNAMIC SERVICES + SEARCH
   ========================================================================== */

function renderServices(filter = '') {
  const grid = $('#services-grid');
  if (!grid) return;

  const status = $('#search-status');
  const term = filter.trim().toLowerCase();

  const results = siteData.services.filter(service => {
    if (!term) return true;
    return (
      service.title.toLowerCase().includes(term) ||
      service.summary.toLowerCase().includes(term) ||
      service.features.some(f => f.toLowerCase().includes(term))
    );
  });

  if (results.length === 0) {
    grid.innerHTML = '<p class="no-results">No services match "' + escapeHtml(filter) +
                     '". Try "cloud", "security" or "web".</p>';
  } else {
    grid.innerHTML = results.map(service => `
      <article class="card">
        <div class="card-icon">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <ul class="card-list">
          ${service.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  }

  if (status) {
    status.textContent = term
      ? `${results.length} service${results.length === 1 ? '' : 's'} match "${filter}"`
      : '';
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function setupServiceSearch() {
  const input = $('#service-search');
  if (!input) return;

  input.addEventListener('input', debounce((e) => {
    renderServices(e.target.value);
  }, 150));

  renderServices('');
}


/* ==========================================================================
   7. ENQUIRY FORM VALIDATION
   ========================================================================== */

const validationRules = {
  name: value =>
    value.trim().length >= 2 || 'Please enter your full name (at least 2 characters).',
  email: value =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Please enter a valid email address.',
  phone: value =>
    !value.trim() || /^[\d\s+()\-]{7,}$/.test(value.trim()) || 'Please enter a valid phone number.',
  company: () => true,
  service: value =>
    value !== '' || 'Please select the service you need.',
  message: value =>
    value.trim().length <= 1000 || 'Message is too long (max 1000 characters).'
};

function getErrorEl(field) {
  return document.getElementById(field.id + '-error');
}

function setFieldError(field, message) {
  const error = getErrorEl(field);
  if (!error) return;

  if (message) {
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('is-invalid');
    error.textContent = message;
    error.hidden = false;
  } else {
    field.removeAttribute('aria-invalid');
    field.classList.remove('is-invalid');
    error.textContent = '';
    error.hidden = true;
  }
}

function validateField(field) {
  const rule = validationRules[field.name];
  if (!rule) return true;

  const result = rule(field.value);
  if (result === true) {
    setFieldError(field, '');
    return true;
  }
  setFieldError(field, result);
  return false;
}

function setupEnquiryForm() {
  const form = $('#enquiry-form');
  if (!form) return;

  const fields = $$('input, select, textarea', form).filter(f => f.name in validationRules);
  const success = $('#form-success');
  const counter = $('#message-count');
  const message = $('#message');

  /* Real-time character counter */
  if (message && counter) {
    const updateCount = () => {
      counter.textContent = `${message.value.length} / 1000 characters`;
      counter.classList.toggle('is-limit', message.value.length > 1000);
    };
    message.addEventListener('input', updateCount);
    updateCount();
  }

  /* Validate each field when the user leaves it */
  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid')) validateField(field);
    });
  });

  /* On submit: validate all, focus first invalid, show success */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid = null;

    fields.forEach(field => {
      const valid = validateField(field);
      if (!valid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      if (success) success.hidden = true;
      return;
    }

    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    form.reset();
    if (counter) counter.textContent = '0 / 1000 characters';
    fields.forEach(f => setFieldError(f, ''));
  });
}


/* ==========================================================================
   8. INTERACTIVE MAP
   ========================================================================== */

function initMap() {
  const el = document.getElementById('map');
  if (!el || typeof L === 'undefined') return;

  const { lat, lng, zoom, popupHTML } = siteData.map;

  const map = L.map('map', {
    scrollWheelZoom: false,
    center: [lat, lng],
    zoom
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map).bindPopup(popupHTML).openPopup();

  /* Respect accessibility: enable scroll zoom only when map is focused */
  map.on('focus', () => map.scrollWheelZoom.enable());
  map.on('blur',  () => map.scrollWheelZoom.disable());
}

function loadMapIfPresent() {
  if (!document.getElementById('map')) return;

  /* Leaflet CSS */
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(css);

  /* Leaflet JS */
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.onload = initMap;
  script.onerror = () => {
    const el = document.getElementById('map');
    if (el) el.innerHTML =
      '<p style="padding:2rem;text-align:center;">Map could not load. Please check your internet connection.</p>';
  };
  document.head.appendChild(script);
}


/* ==========================================================================
   9. INITIALISE EVERYTHING ON DOM READY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  setupMobileMenu();
  setupServiceSearch();
  setupEnquiryForm();
  setupScrollReveal();
  setupBackToTop();
  loadMapIfPresent();
});