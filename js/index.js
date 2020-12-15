window.addEventListener('scroll', (e) => {
  const navbar = document.querySelector('.nav__row')
  if (scrollY < 100) {
    navbar.style.background = 'transparent'
  }
  if (scrollY >= 100) {
    navbar.style.background = 'black'
    navbar.style.zIndex = '200'
  }
})
