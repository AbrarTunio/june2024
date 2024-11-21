let para = document.querySelector('p')
let button = document.querySelector('button')

function greet(){
    para.innerHTML = "hello"
}

button.addEventListener('click' , greet)

window.addEventListener( 'keypress' , (e)=>
    {
        para.innerHTML = e.key;
        console.log(e)
    }
);