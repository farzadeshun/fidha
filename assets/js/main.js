window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    scrollY >= 30 ? nav.classList.add('nav-change') : nav.classList.remove('nav-change');
});