const shopBtn = document.querySelector('.shop');
const popUp = document.querySelector('.popup');
const popUpItem = document.querySelectorAll('.shop-item');
const mainPage = document.querySelector('.main-page');
const clickedPage = document.querySelector('.clicked-page');
const titleClickedPage = document.querySelector('.clicked-page h2');
const purchaseContainer = document.querySelector(
   '.clicked-page .purchase-container'
);

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

const data = [
   {
      descr: '13-inch MacBook Pro with Apple M1 Chip and 256GB storage',
      img: 'data:image/jpeg;base64,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',
      price: '999$',
   },
   {
      descr: '12-inch MacBook Pro with Apple M1 Chip and 256GB storage',
      img: 'data:image/jpeg;base64,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',
      price: '999$',
   },
];

popUpItem.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      switch (e.target.id) {
         case 'laptop':
            //fetch
            showCard(e.target);
            break;
         case 'phone':
            //fetch
            showCard(e.target);
            break;
         case 'watch':
            showCard(e.target);
            //fetch
            break;
      }

      popUp.classList.remove('popupActive');
      isOpen = false;
   });
});

// Opening product modal
const types = {
   laptop: 'Ноутбуки',
   phone: 'Телефоны',
   watch: 'Часы',
};

const btns = document.querySelectorAll('.btn-blue');
const overlay = document.getElementById('overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.exit-btn');

modal.addEventListener('click', (e) => {
   if (e.target.classList.contains('exit-btn')) {
      overlay.style.display = 'none';
   }
});

btns.forEach((btn) => {
   btn.addEventListener('click', clickHandler);
});

async function clickHandler() {
   overlay.style.display = 'flex';

   const data = await fetchProductData();

   modal.innerHTML = await renderProductModal(data);
}

async function renderProductModal({
   image_src,
   name,
   price,
   type,
   description,
   id,
}) {
   const reviews = await renderReviews(id);
   return ` 
      <div class="p-poster">
         <img
            src=${image_src}
            alt=""
         />
      </div>
      <div class="p-info">
         <h1 class="p-title">${name}</h1>
         <div class="p-type">Тип: ${types[type]}</div>
         <div class="p-price">Цена: ${price}$</div>

         <div class="p-descr">
            ${description}
         </div>

         <button class="buy-btn">Купить</button>
         ${reviews}
      </div>
      <button class="exit-btn">&times;</button>
      `;
}

async function renderReviews(id) {
   const reviews = await fetchReviews();

   const currentProductReviews = reviews
      .filter((item) => item.product_id === id)
      .map(
         (el) => `
            <div class="review-item">
               <div class="user-name">${el.name}:</div>
               <div class="review-text">
                  ${el.review}
               </div>
            </div>
         `
      );

   return `
      <div class="p-comments">
         <div class="review-count">Отзывы (${currentProductReviews.length})</div>

         <div class="reviews">
            ${currentProductReviews}
         </div>
      </div>
   `;
}

async function fetchProductData() {
   const res = await fetch('http://localhost:8000/products/1');

   return await res.json();
}

async function fetchReviews() {
   const res = await fetch('http://localhost:8000/reviews');

   return await res.json();
}
const showCard = (element) => {
   mainPage.style.display = 'none';

   titleClickedPage.textContent = element.textContent;
   data.forEach((item) => {
      const card = createCard(item);
      if (!purchaseContainer.contains(card)) {
         purchaseContainer.append(card);
      }
   });

   clickedPage.style.display = 'block';
};

const createCard = ({ descr, img, price }) => {
   const div = document.createElement('div');
   div.className = 'block-purchase';
   div.innerHTML = `<img
      src=${img}
      alt=""
         />
      <p class="descr">
         ${descr}
      </p>
      <span class="price">${price}</span>
      <button class="btn-blue">Buy</button>
   `;

   return div;
};
