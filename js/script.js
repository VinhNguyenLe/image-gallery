const images = document.querySelectorAll('.image')
const closeBtn = document.querySelector('.close__btn')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.image__inner img')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')

let currentIndex = 0

function closeGallery() {
    gallery.classList.remove('show')
}

function showGallery(){
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach(function(image, index){
    image.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    }) 
    
})

closeBtn.addEventListener('click', closeGallery)

leftBtn.addEventListener('click', function(){
    if(currentIndex == 0){
        currentIndex = images.length
    }
    if(currentIndex > 0){
        currentIndex--
    } 
    
    showGallery()
})

rightBtn.addEventListener('click', function(){
  
    if(currentIndex < images.length - 1){
        currentIndex++
    }
    if(currentIndex == images.length - 1){
        currentIndex = 0
    }
    showGallery()
})

document.addEventListener('keydown', function(key){
    if(key.keyCode == 27){
        closeGallery()
    }
})