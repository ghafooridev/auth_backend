## How to run

- `docker pull postgres` (if already have pulled skip this section)
- `docker run -d --name containerName -p port:port -e POSTGRES_PASSWORD=dbPassword postgres` (example: docker run -d --name auth -p 5432:5432 -e POSTGRES_PASSWORD=pass123 postgres)
- `docker ps` (for checking image is running properly)
- `docker exec -it postgresCont bash` (for working with pg database) -`psql -U postgres` (for connecting to database)

---

- `CREATE DATABASE dbName;` (for creating first database)
- `\l` optional - (for checking databse was created properly)
- `\c dbName;` (for connect with dbname database)
- `CREATE TABLE <table_name>(col_1 <data_type>, col_2 <data_type>, col_3 <data_type>,..., col_N <data_type>)` (for creating table) - (example: CREATE TABLE user(ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, TYPE TEXT NOT NULL, CATEGORY TEXT NOT NULL, ATICLES INT NOT NULL);)
- `INSERT INTO <table_name> VALUES (value_1, value_2, value_3, ...);` (for inserting data into table)
- `SELECT * FROM user;` (for showing data)
