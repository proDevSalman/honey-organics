

const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordionItem')
const expandButtons = accordion.querySelectorAll('.magnitude')

window.addEventListener('load', () => {
    if (window.innerWidth >= 1024) {
        accordion.style.height = `${accordion.querySelector('.img5').height}px`
    } else {
        accordion.style.height = 'auto'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        accordion.style.height = `${accordion.querySelector('.img5').height}px`
    } else {
        accordion.style.height = 'auto'
    }
})

expandButtons.forEach((expandButton, index) => {
    expandButton.addEventListener('click', () => {
        accordionItems.forEach(accordionItem => {
            if (accordionItem != accordionItems[index]) {
                accordionItem.style.flexBasis = `60px`
                accordionItem.classList.remove('active')
                accordionItem.querySelector('.price').classList.remove('visible')
                console.log('collapse all other elements')
            }
        })
        if (accordionItems[index].classList.contains('active')) {
            accordionItems[index].style.flexBasis = `60px`
            accordionItems[index].classList.remove('active')
        } else {
            if (window.innerWidth >= 1024) {
                accordionItems[index].style.flexBasis = `30vw`
            } else {
                accordionItems[index].style.flexBasis = `${accordionItems[index].querySelector('img').height}px`
            }
            accordionItems[index].classList.add('active')
        }
        console.log(accordionItems[index].querySelector('.price').classList.toggle('visible'))

    })
})