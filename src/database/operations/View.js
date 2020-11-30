import databaseDomain from '../DatabaseConnection.js'; 

const viewDomain = (domain) => {
    let arrayData = [0]
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM domains WHERE name = ?'
        connection.query(sql, [domain], function (error, result, fields) {
            if (error) {
                console.log(error)
                reject(error)
            }
            connection.end()
            if (result != '') {
                arrayData = [result[0].name, result[0].ip, result[0].whois, result[0].hostedat]
            }
            // resolve('\nResultado: ' + arrayData)
            resolve(arrayData)
        })
    })
}

export default viewDomain;