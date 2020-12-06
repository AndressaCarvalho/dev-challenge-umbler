import databaseDomain from '../DatabaseConnection.js';

async function addDomain (results) {
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        connection('domains').insert({name: results.Name, ip: results.IP, whois: results.Whois}).then(function(result){
            try {
                resolve(results)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    })
}

export default addDomain;