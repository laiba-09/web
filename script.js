const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
signInForm.style.display="none";
signUpForm.style.display="block";
})
signInButton.addEventListener('click',function(){
    signUpForm.style.display="none";
    signInForm.style.display="block";
})