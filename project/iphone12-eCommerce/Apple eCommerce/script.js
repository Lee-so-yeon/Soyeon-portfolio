//Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach((control) => {
    control.addEventListener('click',e =>{
        e.preventDefault()
    })
})
//End ofCommon JS

//Cube
let y = 0
let x = 0
let z = 0
let bool = true
let interval;

const cube = document.querySelector(".cube")

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg) `
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg) `
})

//클릭이벤트 큐브 돌리기



const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

//큐브 반복돌리기

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})

//컨트롤러에 호버시 큐브 멈춤과 재생

//End ofCube




//Slideshow
const slideshowDivs = () => {
    for(let i=1; i<=5; i++){
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() =>{
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        }else{
            divs[0].classList.add('change')
            a=1
        }

        
    },5000)
}

slideshow()
//End of Slideshow

//section-3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll',() => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight/2)
    {
        section3Content.classList.add('change')
    }
})
//End of section-3

//section-4
const watchBands =  document.querySelector('.watch-bands')
const watchCases =  document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX =0
//중심선 axis 기준

const hideControl = () => {
    if(axisY === -280){
        watchTopControl.classList.add('hideControl')
    }else{
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY === 280){
        watchBottomControl.classList.add('hideControl')
    }else{
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX === 280){
        watchRightControl.classList.add('hideControl')
    }else{
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX === -280){
        watchLeftControl.classList.add('hideControl')
    }else{
        watchLeftControl.classList.remove('hideControl')
    }
}

watchTopControl.addEventListener('click', () =>{
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () =>{
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})
//End of section-4