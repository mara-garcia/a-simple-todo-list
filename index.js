let inputField = document.getElementById('input');
let btnSubmit = document.getElementById('submit');
let btnClear = document.getElementById('clear');
let cont = document.getElementById('container');

btnSubmit.addEventListener('click', function() {
    let par = document.createElement('p');
    par.classList.add('par-styling');
    par.textContent = inputField.value;
    cont.appendChild(par); 
    inputField.value = '';
    par.addEventListener('click', function(){
        par.style.textDecoration = 'line-through';
    })
    par.addEventListener('dblclick', function(){
        cont.removeChild(par);
    })
    btnClear.addEventListener('click', function(){
        cont.removeChild(par);
    })
})