-- SELECT * FROM cars;
-- SELECT brand, model, condition, year FROM cars;
-- SELECT brand, model, condition, price FROM cars WHERE color = 'black';
-- SELECT brand, model, condition, price FROM cars WHERE condition = 0;
-- SELECT brand, model, condition, price FROM cars WHERE price < 50000;
-- SELECT brand, model, condition, price, color FROM cars WHERE color != 'yellow'; -- Includes 'light yellow'
-- SELECT brand, model, condition, price, color FROM cars WHERE color not like '%yellow%'; -- Excludes 'light yellow'
-- SELECT brand, model, condition, price, color FROM cars WHERE model like 'DB%';
-- SELECT brand, model, year, condition, price, color FROM cars WHERE year < 1970 AND condition >= 3;
-- SELECT brand, model, year, condition, price, color FROM cars WHERE year <= 1989 AND year >= 1980; -- Alternatively:
-- SELECT brand, model, year, condition, price, color FROM cars WHERE year between 1980 AND 1989;
-- SELECT brand, model, year, condition, price, color FROM cars WHERE price between 20000 AND 60000 AND condition between 1 AND 3 AND color LIKE '%red%';
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = false AND (year between 1960 AND 1969 OR color LIKE '%red%');
-- SELECT brand, model, year, condition, price, color FROM cars WHERE year in (1961, 1963, 1965, 1967, 1969) AND condition >=3 AND sold IS FALSE;
-- I wouldn't buy American unless I could spend less than $50k
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = FALSE AND ((price >= 50000) AND (brand in ('Ford', 'Triumph', 'Chevrolet', 'Dodge'))) = FALSE

-- Challenge 1
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = FALSE AND color LIKE '%red%' AND brand != 'Ferrari';
-- Colour is not red, blue or white AND brand is non of Aston Martin, Bentley, Jaguar
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = FALSE AND (color in ('red', 'blue', 'white') OR (brand IN ('Aston Martin', 'Bentley', 'Jaguar'))) = FALSE;
-- Dodge from the 60s or (Ford or Triumph) from 70s
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = FALSE
--     AND ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969) OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979));

-- Order by descending condition, then by price ascending
-- SELECT brand, model, year, condition, price, color FROM cars ORDER BY condition desc, price;
-- SELECT brand, model, year, condition, price, color FROM cars WHERE sold = FALSE AND condition != 5 ORDER BY condition desc, price;
-- Most expensive car we have:
-- SELECT brand, model, year, condition, price, color FROM cars ORDER BY price desc LIMIT 1;
-- Five least expensive red cars
-- SELECT brand, model, year, condition, price, color FROM cars WHERE color like '%red%' ORDER BY price LIMIT 5;

-- SELECT count(*) AS total_sold FROM cars WHERE sold;
-- SELECT sum(price) AS total_earnings FROM cars WHERE sold;
-- SELECT max(price) AS total_earnings FROM cars WHERE sold;
-- SELECT avg(price) AS AVG_Bentley FROM cars WHERE brand = 'Bentley';
-- SELECT min(price) AS min_price, floor(avg(price)) AS avg_price, max(price) AS max_price FROM cars WHERE sold;

-- SELECT brand, count(*) as count FROM cars WHERE sold = FALSE GROUP BY brand;
-- SELECT brand, count(*) as count, floor(avg(price)) AS avg_price FROM cars WHERE sold = FALSE GROUP BY brand;
-- Same as above, but exclude records where count is 1
-- SELECT brand, count(*) as count, floor(avg(price)) AS avg_price FROM cars WHERE sold = FALSE GROUP BY brand HAVING count(*) > 1; -- No alias allowed

-- SELECT year, count(year) as count, min(price) AS min_price, max(price) AS max_price FROM cars WHERE sold GROUP BY year HAVING count(year) > 1 ORDER BY count;

-- Challenge 2
-- 5 oldest
-- SELECT brand, model, year FROM cars WHERE sold = FALSE ORDER BY year LIMIT 5;
-- The most common colours we have in stock
-- SELECT color, count(color) as count FROM cars WHERE sold = FALSE GROUP BY color ORDER BY count desc LIMIT 5;
-- SELECT color, count(color) as count FROM cars WHERE sold = FALSE GROUP BY color HAVING count(color) > 2 ORDER BY count desc;

