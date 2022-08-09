Create database final;
drop table final if exists;

CREATE TABLE restaurants (
    res_id serial not null PRIMARY KEY,
    res_name text not null,
    res_pic varchar(500) not null
);

CREATE TABLE res_branches (
    branch_id serial not null PRIMARY KEY,
    branch_name text not null,
    branch_pic varchar(500) not null,
    res_ref_id int,
        FOREIGN KEY(res_ref_id)
        REFERENCES restaurants(res_id)   
        ON DELETE CASCADE
);
CREATE TABLE foods (
    food_id serial not null PRIMARY KEY,
    food_name text not null,
    food_pic varchar(500) not null,
    food_price varchar(200) not null,
    branch_ref_id int,
        FOREIGN KEY(branch_ref_id)
        REFERENCES res_branches(branch_id)
        ON DELETE CASCADE
);
CREATE TABLE orders (
    order_id serial not null PRIMARY KEY,
    order_name text not null,
    ordered_user_name text not null,
    ordered_user_number varchar(64) not null,
    ordered_user_location varchar(64) not null,
    ordered_time timestamptz DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO restaurants(res_name, res_pic) VALUES('Traditional foods', 'https://www.willflyforfood.net/wp-content/uploads/2021/12/uzbek-food-plov-pinterest.jpg');
INSERT INTO restaurants(res_name, res_pic) VALUES('Fast foods', 'https://iqtidor.uz//files/fotki/hamburger-fries.jpg');


-- branch

INSERT INTO res_branches(branch_name, branch_pic, res_ref_id ) VALUES('Rayhon', 'https://play-lh.googleusercontent.com/8pqrwZViX_tO0rG5x8rA_AuCITFcxbyBR4kuYoeEINDSx25SHaa40yTZRX2_bcU82TK6', 1);
INSERT INTO res_branches(branch_name, branch_pic, res_ref_id ) VALUES('Mahmood Kabab', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh9vWSPedZ8h_bB5nAPY4iLvsqnAcjOJ3cobmFUy40Knw8xba8cBcH2wA9renaELV7Uk&usqp=CAU', 1);

INSERT INTO res_branches(branch_name, branch_pic, res_ref_id ) VALUES('Oq tepa Lavash', 'https://pasta.uz/upload/products/IMG_20211128_175546_719.jpg', 2);
INSERT INTO res_branches(branch_name, branch_pic, res_ref_id ) VALUES('Evos', 'https://play-lh.googleusercontent.com/2owmffIC3y5PKPMcmye1Olab0qhg3hnnU8ymBlrrg4Hv5hCOQBCR2NunldYsvEzZKet6', 2);

-- food

INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Rayhon kabab', 'https://market.vseokoree.com/images/product/157369381210000.png', '20 000', 1);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Manti', 'https://market.vseokoree.com/images/product/1574731654.jpg', '10 000', 1);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('shorva', 'https://i.ytimg.com/vi/nHxh7R742VI/maxresdefault.jpg', '39 000', 1);


INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('shashlik', 'https://images.deliveryhero.io/image/fd-tr/LH/nrwc-hero.jpg', '43 000', 2);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Qogirma', 'https://apollo-olx.cdnvideo.ru/v1/files/x8kygtzw41jw1-UZ/image;s=644x461', '120 000', 2);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Kabob tovuq', 'https://nashe.menu/images/restaurant/416/dish/38044_1622105333.jpg', '150 000', 2);



INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Lavsh', 'https://pasta.uz/upload/products/Lavash%20sirli.jpg', '24 000', 3);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Clap Snedwich', 'https://pasta.uz/upload/products/IMG_20211126_123138_000.jpg', '23 000', 3);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Pizza', 'https://pasta.uz/upload/products/IMG_20211126_123151_330_copy_1817x770.jpg', '70 000', 3);



INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Lavash', 'https://pasta.uz/upload/products/Fitter.jpg', '22 000', 4);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('Gambureger', 'https://pasta.uz/upload/products/IMG_20211126_123109_983_copy_2031x860.jpg', '18 000', 4);
INSERT INTO foods(food_name, food_pic, food_price, branch_ref_id) VALUES('pizza', 'https://sdmall.uz/images/american-pizza-img-1.jpg', '60 000', 4);




-- orders

INSERT INTO orders (order_name, ordered_user_name, ordered_user_number, ordered_user_location) VALUES('Manti', 'Xayrullo', '+9989956565', 'Ganga Xadra');