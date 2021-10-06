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

INSERT INTO reviews (name, review, rating, product_id) VALUES ('Дархан Жунусов', 'Очен мощный ноутбук!!', 5, 1);