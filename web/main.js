// Interaktif kecil-kecilan😁
const bgNike = document.querySelector('.bg-nike')
const h2 = document.querySelector('h2')
window.addEventListener('scroll' , function(){
   let value = window.scrollY
   console.log(value);

h2.style.bottom = value  + 'px'
bgNike.style.bottom = value  + 'px'
})