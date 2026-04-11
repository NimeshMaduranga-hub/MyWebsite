const btn = document.querySelector('.btnhire');

btn.addEventListener('click', () => {
    btn.classList.remove('animate'); // restart animation
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('animate');
});