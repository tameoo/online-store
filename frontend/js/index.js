document.addEventListener('DOMContentLoaded', (event) => {
   const productsContainer = document.querySelector('.purchase-container');

   fetchProducts().then((data) => {
      const cards = data.map(toCard);

      productsContainer.innerHTML = cards.join('');

      document.querySelectorAll('.btn-blue').forEach((btn) => {
         btn.addEventListener('click', clickHandler);
      });
   });
});

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

// Opening product modal
const types = {
   laptop: 'Ноутбуки',
   phone: 'Телефоны',
   watch: 'Часы',
   other: 'Другое',
};

const overlay = document.getElementById('overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.exit-btn');

modal.addEventListener('click', (e) => {
   if (e.target.classList.contains('exit-btn')) {
      overlay.style.display = 'none';
   }
});

async function clickHandler(e) {
   overlay.style.display = 'flex';
   const clickedProductName =
      e.target.parentNode.querySelector('.descr').innerText;

   const data = await fetchProductData(clickedProductName);
   modal.innerHTML = await renderProductModal(data);

   document.querySelectorAll('.buy-btn').forEach((btn) =>
      btn.addEventListener('click', () => {
         alert('Куплено!');
      })
   );
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

async function fetchProductData(productName) {
   const res = await fetch(
      `http://localhost:8000/products?name=${productName}`
   );

   return await res.json();
}

async function fetchReviews() {
   const res = await fetch('http://localhost:8000/reviews');

   return await res.json();
}

async function fetchProducts() {
   const res = await fetch('http://localhost:8000/products');

   return await res.json();
}

function toCard({ image_src, price, name }) {
   return `
      <div class="block-purchase">
         <img
            src=${image_src}
            alt=""
         />
         <p class="descr">
            ${name}
         </p>
         <span class="price discount">1200$</span>
         <span class="price">${price}$</span>
         <button class="btn-blue">Купить</button>
      </div>
   `;
}
