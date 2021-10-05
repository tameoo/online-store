const shopBtn = document.querySelector('.shop');
const popUp = document.querySelector('.popup');
console.log(shopBtn);
let isOpen = false;

shopBtn.addEventListener('click', (e) => {
   console.log(isOpen);
   if (isOpen) {
      popUp.classList.remove('popupActive');
      isOpen = false;
   } else {
      popUp.classList.add('popupActive');
      isOpen = true;
   }
});
