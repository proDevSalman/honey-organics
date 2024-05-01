Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let navLinks = document.querySelectorAll('.navLink')

navLinks[0].addEventListener('click', () => {
        smoothScroll({toElement: document.getElementById('home'), duration: 3000, easing: 'easeInOutCirc'})
})

navLinks[1].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('about'), duration: 3000, easing: 'easeInOutCirc'})
})

navLinks[2].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('gallery'), duration: 3000, easing: 'easeInOutCirc'})
})

navLinks[3].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('pricing'), duration: 3000, easing: 'easeInOutCirc'})
})

navLinks[4].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('contact'), duration: 3000, easing: 'easeInOutCirc'})
})