import MySQLdb

TABLE_TRANSACTION_SCHEMA = '''TRANSACTIONS (
ID INT NOT NULL AUTO_INCREMENT,
NAME VARCHAR(50),
AMOUNT INT NOT NULL,
TAGS VARCHAR(50),
FROMACC VARCHAR(50),
TOACC VARCHAR(50),
TYPE VARCHAR(50),
TRANSACTIONDATE DATE,
PRIMARY KEY ( ID ))
'''
def getConnection(db="devathon"):
    db = MySQLdb.connect(host="localhost",
                         user="root",
                         passwd="nanivallu",
                         db="devathon"
                         )
    return db

def closeConnection(db):
    db.close()

db = getConnection()
executor = db.cursor()

executor.execute("DROP TABLE IF EXISTS TRANSACTIONS")
command = "CREATE TABLE {0}".format(TABLE_TRANSACTION_SCHEMA)
executor.execute(command)