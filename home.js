// Simple reveal on load/scroll for a lively feel
const els = document.querySelectorAll('.reveal');
const show = () => {
  const h = window.innerHeight * 0.92;
  els.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < h) el.classList.add('show');
  });
};
document.addEventListener('scroll', show, { passive: true });
window.addEventListener('load', show);

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Accessibility: allow pressing Enter on the page to open the portfolio quickly
window.addEventListener('keydown', (e) => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (e.key === 'Enter' && (tag !== 'input' && tag !== 'textarea')) {
    document.querySelector('.btn.primary')?.click();
  }
});
