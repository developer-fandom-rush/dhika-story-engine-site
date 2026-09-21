(() => {
  const embedded = window.self !== window.top || new URLSearchParams(window.location.search).get('embedded') === '1';
  if (embedded) document.documentElement.classList.add('embedded-mode');
})();