let box = document.querySelector('.box')

box.addEventListener( 'mouseenter' , ()=>{
    box.classList.add('colorchange')
} )

box.addEventListener( 'mouseleave' , ()=>{
    box.classList.remove('colorchange')
    
} )



let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let result = document.querySelector('#result')
let calc = document.querySelector('button')

// result.addEventListener( 'focus' , ()=>{
//     oneV = num1.value
//     twoV = num2.value
//     result.value = oneV - twoV
// }  )


// num2.addEventListener( 'blur' , ()=>{
//     oneV = num1.value
//     twoV = num2.value
//     result.value = oneV - twoV
// }  )


calc.addEventListener( 'click' , (e)=>{
        e.preventDefault();
        oneV = num1.value
        twoV = num2.value
        result.value = oneV - twoV
    }  )
