import knex from 'knex';

function databaseDomain () {
    const connection = knex({
        client: 'mysql',
        connection: {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'db-challenge'
        }
    });

    return connection
}

export default databaseDomain;
