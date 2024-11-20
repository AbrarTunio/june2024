let bulb = document.querySelector('div')
let section = document.querySelector('section')
let toggle = document.querySelector('#toggle')

// let on = document.querySelector('#on')
// let off = document.querySelector('#off')

function turnOn(){
    bulb.classList.add('on')
    bulb.classList.remove('off')
    section.innerText = 'ON'
}

function turnOff(){
    bulb.classList.add('off')
    bulb.classList.remove('on')
    section.innerText = 'OFF'
}

count = 1
function clicky(){
    // bulb.classList.toggle('off')
    bulb.classList.toggle('on')
    if ( count % 2 == 0 ){
        toggle.innerText="ON"
    }else{
        toggle.innerText="OFF"
    }
    // console.log(count , '==>' ,count % 4 )
    count++
}