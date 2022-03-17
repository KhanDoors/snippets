import sqlite3

# https://www.youtube.com/watch?v=RZI-v-Z1W4c
# https://www.youtube.com/watch?v=LFG2Kx1m-Dc

con = sqlite3.connect("test.db")
cur = con.cursor()

cur.execute(
    """CREATE TABLE IF NOT EXISTS tshirts
(sku text PRIMARY KEY, name text, size text, price real)"""
)

cur.execute(
    """INSERT OR IGNORE INTO tshirts VALUES
('ABC12345', 'T-Shirt', 'Large', 17.99)"""
)

con.commit()

for row in cur.execute("""SELECT * FROM tshirts"""):
    print(row)
