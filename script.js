new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally:false,
    scrollOverflow:false,
    easing: 'easeInOutCubic',

    afterLoad: function(origin, destination, direction, trigger) {
        // getImagesFromNewSlide()
        // if (origin.index == 1){
        //     currentSlide = 1
        //     getImagesFromNewSlide(currentSlide)
        // }
        // if (origin.index == 2) {
        //     currentSlide = 2  
        // }
        // if (origin.index == 3) {
        //     currentSlide = 3
        // }
        // if (origin.index == 4) {
        //     currentSlide = 4
        // }
        // if (origin.index == 5) {
        //     currentSlide = 5
        // }
        // if (origin.index == 6) {
        //     currentSlide = 6
        // }
        // if (origin.index == 7) {
        //     currentSlide = 7
        // }
        // if (origin.index == 8) {
        //     currentSlide = 8
        // }
    }
})

var imageCounter = 0
var currentImages = []

function startSlideshowTimer() {
    try {
        clearTimeout(imagetimer)
    } catch (error) {
        console.log('no timer to clear')
    }
    imagetimer = setInterval(nextImage, 5000)
}

function getImagesFromNewSlide() {
    currentImages = document.querySelectorAll('.active .pictureframe')
    if (currentImages.length != 0) {
        imageCounter = 0
        startSlideshowTimer()
        nextImage()
    }
} 

function nextImage() {
    // console.log(`Image counter is ${imageCounter}`)
    // console.log(`current length of image array is ${currentImages.length}`)
    if (imageCounter >= currentImages.length) {imageCounter = 0}
    for (x = 0;x<currentImages.length;x++) {currentImages[x].style.opacity = 0}
    // console.log(`image number ${imageCounter}`)
    currentImages[imageCounter].style.opacity = 1
    imageCounter++
}