// Scroll-reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = Number(e.target.dataset.delay || 0) * 100;
      setTimeout(() => e.target.classList.add('revealed'), delay);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Toast notification (imported by contact.js)
export function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const color = type === 'error' ? '#F97316' : '#D4AF37';
  const toast = document.createElement('div');
  toast.style.cssText = `background:#111;border:1px solid ${color};border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;max-width:360px;box-shadow:0 8px 32px rgba(0,0,0,0.4);animation:slideIn 0.3s ease;`;
  toast.innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.05rem;color:#fff;text-transform:uppercase;letter-spacing:0.05em;">${title}</div>
    <div style="font-family:'Poppins',sans-serif;font-size:0.875rem;color:#a3a3a3;margin-top:0.25rem;">${message}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
