CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   name VARCHAR(80) NOT NULL,
   type VARCHAR(50) NOT NULL,
   description VARCHAR(100) NOT NULL,
   image_src VARCHAR(100) NOT NULL,
   price INT NOT NULL,
);

CREATE TABLE reviews (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   review TEXT NOT NULL,
   rating INT CHECK(rating > 0 AND rating <= 5),
   product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE messages (
   id SERIAL PRIMARY KEY,
   full_name VARCHAR(50) NOT NULL,
   message TEXT NOT NULL,
   email VARCHAR(50) NOT NULL, 
);

INSERT INTO products (name, type, description, image_src, price) VALUES ('MacBook Pro Apple M1', 'laptop', 'С появлением чипа M1 MacBook Pro 13 дюймов становится невероятно про­из­во­ди­тель­ным и быстрым. Мощность центрального процессора выросла до 2,8 раза. Скорость обработки графики — до 5 раз. Благодаря передовой системе Neural Engine скорость машинного обучения возросла до 11 раз', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604347427000', 999);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Iphone XS 64GB', 'phone', 'Дисплей Super Retina в двух размерах, один из которых стал самым большим в истории iPhone. Ещё более быстрый Face ID. Самый мощный и умный процессор iPhone.', 'https://nout.kz/upload/iblock/e84/apple_iphone_xs_64gb_zolotistyj_2.jpg', 599);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Apple Watch Sport 6 40mm', 'watch', 'Измеряйте уровень кислорода в крови с помощью потрясающего нового датчика и специального приложения. Просматривайте показатели тренировок на улучшенном, всегда включённом дисплее Retina.', 'https://object.pscloud.io/cms/cms/Photo/img_0_911_450_0_6.png', 399);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Huawei P Smart 2021 128GB Black', 'phone', 'HUAWEI P smart 2021 поддерживает быструю зарядку HUAWEI SuperCharge 22.5 Вт, что позволяет смотреть видео в течение двух часов после 10 минут зарядки.', 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/plp/new-phones/product-list/mate40pro-plus-black.png', 499);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Samsung Galaxy A22 128GB White', 'phone', 'Насладитесь детальным изображением на Super AMOLED 6,4 экране с разрешением HD+ и яркостью до 600 нит1. Благодаря увеличенному экрану вы увидите больше, а сверх плавная прокрутка обеспечивает комфортный просмотр во время игрового сеанса или скроллинга изображения на экране.', 'https://object.pscloud.io/cms/cms/Photo/img_0_77_3058_0_1.jpg', 599);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Мультиварка REDMOND RMC-M252', 'other', 'REDMOND RMC-М252 – это универсальная мультиварка с широким функционалом и простым управлением, которая позволит вам с легкостью готовить повседневные и праздничные блюда и напитки.', 'https://object.pscloud.io/cms/cms/Photo/img_0_344_81_3.jpg', 399);

INSERT INTO products (name, type, description, image_src, price) VALUES ('Игровая консоль Sony PlayStation 5 Slim', 'other', 'Невероятные игры и развлечения без границ Консоль PS5 предлагает игрокам потрясающую игровую мощь, невероятные развлечения и прекрасную технологию HDR1.', 'https://sonycenter.kz/image/cache_v/catalog/kostas/photo/playstation/ps5/ps5-600x600.png', 1000);

INSERT INTO reviews (name, review, rating, product_id) VALUES ('Дархан Жунусов', 'Очен мощный ноутбук!!', 5, 1);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Иван Рудской', 'Камера отлично передает цвета.', 5, 2);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Диас Шарип', 'Слишком дорого :((', 3, 2);

INSERT INTO reviews (name, review, rating, product_id) VALUES ('Олжас Ратбек', 'Быстро царапается! Не покупайте...', 3, 3);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Санат Толеген', 'Супер удобные часы', 5, 3);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Сунгат', 'Купил буквально вчера, очень рад что не пожалел деньги)', 3, 6);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Болатбек', 'Очень удобно готовить разные блюда!))', 3, 7);
INSERT INTO reviews (name, review, rating, product_id) VALUES ('Сана', 'Провожу все время играя в ps!', 3, 8);