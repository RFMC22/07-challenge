const enviar = document.querySelector('#button');
const email = document.querySelector('#email');
const error = document.querySelector('.active');
const errorp = document.querySelector('form p');
const validacion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

enviar.addEventListener('click',(e)=>{
  e.preventDefault();
  if(validacion.test(email.value)){
    error.style.display = 'none';
    errorp.style.display = 'none';
  }else{
    error.style.display = 'block';
    errorp.style.display = 'block';
  }
});