import sqlite3

# create a connection to the database
conn = sqlite3.connect('nfl_quiz.db')

# create a cursor object to execute SQL queries
cur = conn.cursor()

# create a table to store the quiz questions
cur.execute('''CREATE TABLE IF NOT EXISTS questions
               (id INTEGER PRIMARY KEY,
                question TEXT,
                option1 TEXT,
                option2 TEXT,
                option3 TEXT,
                option4 TEXT,
                answer TEXT)''')

# insert the questions into the table
cur.execute("INSERT INTO questions VALUES (1, 'Which NFL team has won the most Super Bowls?', 'A. Dallas Cowboys', 'B. Pittsburgh Steelers', 'C. New England Patriots', 'D. San Francisco 49ers', 'B')")
cur.execute("INSERT INTO questions VALUES (2, 'Who is the NFL\'s all-time leading rusher?', 'A. Emmitt Smith', 'B. Walter Payton', 'C. Barry Sanders', 'D. Jim Brown', 'A')")
cur.execute("INSERT INTO questions VALUES (3, 'Which NFL quarterback has won the most Super Bowls?', 'A. Joe Montana', 'B. Tom Brady', 'C. Terry Bradshaw', 'D. Troy Aikman', 'B')")
cur.execute("INSERT INTO questions VALUES (4, 'Which NFL team has the most regular season wins?', 'A. Green Bay Packers', 'B. New England Patriots', 'C. Chicago Bears', 'D. Dallas Cowboys', 'B')")
cur.execute("INSERT INTO questions VALUES (5, 'Who is the NFL\'s all-time leading passer?', 'A. Tom Brady', 'B. Peyton Manning', 'C. Brett Favre', 'D. Drew Brees', 'B')")

# commit the changes to the database and close the connection
conn.commit()
conn.close()
