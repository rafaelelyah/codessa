import '../terrain/main.scss';
import { initExpandableNav } from './navToggle.js';

document.querySelectorAll('[data-nav-expandable]').forEach(nav => {
  initExpandableNav(nav);
});