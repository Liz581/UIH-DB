import sqlite3
from sqlite3 import Error

db_name = "UIH_DB.db"

class Vaccine:
    def __init__(self, name: str, company_name: float, doses_required: int, opt_description: str):
        self.name = name
        self.company_name = company_name
        self.doses_required = doses_required
        self.opt_description = opt_description

class Nurse:
    def __init__(self, employee_id: str, name: str, age: int, gender: str, phone_number: str, address: str):
        self.employee_id = employee_id
        self.name = name
        self.age = age
        self.gender = gender
        self.phone_number = phone_number
        self.address = address

class Patient:
    def __init__(self, name: str, ssn: str, age: int, gender: str, race: str, occupation: str, medical_history: str, phone_number: str, address: str):
        self.name = name
        self.ssn = ssn
        self.age = age
        self.gender = gender
        self.race = race
        self.occupation = occupation
        self.medical_history = medical_history
        self.phone_number = phone_number
        self.address = address

def create_database():
    """
    creates a database with a table of variable fields

    :return:
        the database connection object
    :rtype:
        Connection
    """

    # connects to the database if it exists, if not then creates a new database
    try:
        db = sqlite3.connect(db_name)
    except Error as e:
        print(e)

    # get cursor
    cursor = db.cursor()

    sql = 'CREATE TABLE IF NOT EXISTS Vaccine' + '''(
        name VARCHAR(50) PRIMARY KEY NOT NULL,
        company_name VARCHAR(50) NOT NULL,
        doses_required INTEGER NOT NULL,
        opt_description MEDIUMTEXT
    );'''
    cursor.execute(sql)

    sql = 'CREATE TABLE IF NOT EXISTS Nurse' + '''(
        employee_id INTEGER PRIMARY KEY NOT NULL,
        name VARCHAR(50) NOT NULL,
        age SMALLINT NOT NULL,
        gender CHAR(2) NOT NULL,
        phone_number VARCHAR(15) NOT NULL,
        address VARCHAR(50) NOT NULL
    );'''
    cursor.execute(sql)

    sql = 'CREATE TABLE IF NOT EXISTS Patient'+ '''(
        ssn VARCHAR(15) PRIMARY KEY NOT NULL,
        name VARCHAR(50) NOT NULL,
        age SMALLINT NOT NULL,
        gender CHAR(2) NOT NULL,
        race VARCHAR(15) NOT NULL,
        occupation VARCHAR(50) NOT NULL,
        medical_history MEDIUMTEXT NOT NULL,
        phone_number VARCHAR(15) NOT NULL,
        address VARCHAR(50) NOT NULL
    );'''
    cursor.execute(sql)

    db.commit()
    cursor.close()

    return db

class DatabaseConnection:

    def __init__(self):
        """
        class constructor: generates a database connection object
        """
        self.__db = create_database()

    def insert_vaccine(self, vaccine:Vaccine):
        """
        inserts a vaccine object into the database

        :param vaccine:
            the vaccine object
        :type Vaccine:
            vaccine
        :return:
            boolean indicating if the operation was successful or not
        :rtype:
            bool
        """
        try:
            # get cursor
            cursor = self.__db.cursor()
        except Error as e:
            print(e)
            return False

        try:
            # insert sql query into appropiate table
            sql = "INSERT INTO '{}' (name, company_name, doses_required, opt_description) VALUES ('{}','{}','{}','{}');".format('Vaccine', vaccine.name, vaccine.company_name, vaccine.doses_required, vaccine.opt_description)
            # sql = "INSERT INTO '{}' () VALUES ('{}','{}','{}','{}','{}','{}');".format('Nurse', ...)
            # sql = "INSERT INTO '{}' () VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}');".format('Patient', ...)
            

            # execute sql query
            cursor.execute(sql)
            
            # commit to db
            self.__db.commit()

            # close
            cursor.close()

            return True
        except Exception as e:
            print(e)
            return False
      
    def get_all_timestamps(self):
        """
        gets all bitcoin timestamps in the database

        :return:
            a list of bitcoin timestamps
        :rtype:
            list[BitcoinTimestamp]
        """
        try:
            output = []

            # get cursor
            cursor = self.__db.cursor()

            # define SQL query
            sql = "SELECT * FROM '{}';".format('Vaccine')

            # execute sql query
            cursor.execute(sql)

            # fetch all results obtained
            results = cursor.fetchall()

            # close
            cursor.close()

            # print the results
            print(results)

            return results
        except Error as e:
            print(e)
            return []