// Interaktif kecil-kecilan😁heheheha
const bgNike = document.querySelector('.bg-nike')
const h2 = document.querySelector('h2')
window.addEventListener('scroll' , function(){
   let value = window.scrollY
   console.log(value);

h2.style.left = value  + 'px'
bgNike.style.right = value  + 'px'
})