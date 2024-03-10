const toggleButton = document.getElementsByClassName('.dots')[0]
const navbarLinks =document.getElementsByClassName('.navigation__list')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})