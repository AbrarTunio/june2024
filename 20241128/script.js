let colors = ['yellow' , 'orange' , 'gray' , 'green']
let fruits = ['Mango' , 'Orange', 'Kiwi' , 'Apple']
let statement = ['I like' , 'I hate' , 'I love' , 'I bite']

fruits.forEach( (f , idx=0)=> {
    document.querySelector(`#${f}`).innerHTML = `${statement[idx]}` + f
    document.querySelector(`#${f}`).style.backgroundColor = `${colors[idx]}` 
    idx++
} )
