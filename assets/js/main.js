
document.addEventListener('DOMContentLoaded',()=>{
 const f=document.getElementById('contactForm');
 if(f){f.addEventListener('submit',e=>{
  const email=document.getElementById('email').value;
  if(!email.includes('@')){alert('Enter valid email');e.preventDefault();}
 });}
});
