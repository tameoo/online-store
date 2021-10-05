const shopBtn = document.querySelector('.shop');
const popUp = document.querySelector('.popup');

let isOpen = false;

shopBtn.addEventListener('click', (e) => {
   if (isOpen) {
      popUp.classList.remove('popupActive');
      isOpen = false;
   } else {
      popUp.classList.add('popupActive');
      isOpen = true;
   }
});

const popUpItem = document.querySelectorAll('.popup-item');

popUpItem.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = element.href + '?query=value';
   });
});
