// Filter tabs — show/hide opportunity cards by data-category attribute
const filterBtns = document.querySelectorAll('.filter-btn');
const oppItems   = document.querySelectorAll('.opp-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;

    filterBtns.forEach(b => {
      b.style.background   = '#111';
      b.style.color        = 'rgba(255,255,255,0.7)';
      b.style.borderColor  = 'rgba(255,255,255,0.1)';
    });
    btn.style.background  = '#D4AF37';
    btn.style.color       = '#0A0A0A';
    btn.style.borderColor = '#D4AF37';

    oppItems.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
    });
  });
});
