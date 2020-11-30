import mysql from 'mysql';

function databaseDomain () {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'db-challenge'
    });

    return connection
}

export default databaseDomain;
