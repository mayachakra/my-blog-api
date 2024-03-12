const themeSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');
let mode ='light';
const container = document.getElementById('.container');
const footer = document.getElementById('footer');


themeSwitch.addEventListener('click',function(){
    if (mode === 'light'){
        mode='dark';
        body.setAttribute('class','dark');
    } else{
        mode='light';
        body.setAttribute('class','light');
   
    }
})