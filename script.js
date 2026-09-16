const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

button.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
  button.textContent = isOpen ? 'Close' : 'Menu';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
