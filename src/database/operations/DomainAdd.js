import databaseDomain from '../DatabaseConnection.js';

async function addDomain (arrayDomain) {
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        connection('domains').insert({name: arrayDomain[0], ip: arrayDomain[1], whois: arrayDomain[2]}).then(function(result){
            try {
                resolve(arrayDomain)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    })
}

export default addDomain;