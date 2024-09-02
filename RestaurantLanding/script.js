const logo =document.querySelector('.logo');
const listItems = document.querySelectorAll('li');


listItems.forEach(li => {
  li.addEventListener('click', () => {
    li.style.color = 'yellow'; 
  });
});

logo.addEventListener('click' ,()=>{

 logo.style.color="yellow";
 logo.style.fontFamily = 'Poppins, sans-serif';

});