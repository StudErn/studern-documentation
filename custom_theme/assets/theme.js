const root = document.documentElement;
const modeToggle = document.getElementById('modeToggle');
const modeIcon = modeToggle?.querySelector('.mode-icon');
const modeText = modeToggle?.querySelector('.mode-text');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

const applyTheme = (theme) => {
  if (!theme) return;
  document.body.setAttribute('data-theme', theme);
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  if (modeIcon) modeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  if (modeText) modeText.textContent = theme === 'dark' ? 'Dark' : 'Light';
};

const storedTheme = localStorage.getItem('studern-theme');
if (storedTheme) {
  applyTheme(storedTheme);
}

modeToggle?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  localStorage.setItem('studern-theme', next);
  applyTheme(next);
});

menuToggle?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

sidebar?.addEventListener('click', (event) => {
  if (event.target === sidebar) {
    sidebar.classList.remove('open');
  }
});

const navToggles = document.querySelectorAll('[data-nav-toggle]');
navToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentElement?.classList.toggle('collapsed');
  });
});
