export function initExpandableNav(container) {
  if (!container) return;

  container.querySelectorAll('.menu-toggle').forEach(button => {
    const submenuId = button.getAttribute('aria-controls');
    const submenu = document.getElementById(submenuId);
    if (!submenu) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isExpanded));

      if (!isExpanded) {
        submenu.classList.add('is-open');
        submenu.hidden = false;
      } else {
        submenu.classList.remove('is-open');
        submenu.hidden = true;
      }
    });
  });
}
