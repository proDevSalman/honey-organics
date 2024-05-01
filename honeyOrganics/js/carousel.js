
const carousel = document.querySelector('.carousel')

console.log(carousel)

const imageGenerator = (slide) => {
    const newSlide = document.createElement('div')
        newSlide.setAttribute('class', 'slide')

        const newImage = document.createElement('img')
        
        newImage.setAttribute('src', `images/honeyBees/slide${slide}.jpg`)

        newSlide.appendChild(newImage)
        carousel.appendChild(newSlide)
}

const slider = (slide) => {
    carousel.style.transform = `translateX(-${(slide-1)*100}%)`
}

function* slideGen () {
    let currentSlide = 1
    let slide = 1
    let continueGen = true
    imageGenerator(currentSlide)

    while(continueGen) {
        slide++
        currentSlide++
        imageGenerator(currentSlide)

        if(currentSlide == 6) {
            currentSlide = 0
        }

        yield 'paused'
        
        slider(slide)
        
    }
}

const slideGenerator = slideGen()

slideGenerator.next()

let carouselSlider = setInterval(() => {
        slideGenerator.next()
    }, 3000)

    // clearInterval(carouselSlider)

