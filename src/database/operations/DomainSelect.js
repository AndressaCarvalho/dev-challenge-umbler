import databaseDomain from '../DatabaseConnection.js';

async function selectDomain (domain) {
    let arrayResult = []
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        connection.select('*').from('domains').where('name', domain).then(function(result){
            try {
                if (result != '') {
                    arrayResult = [result[0].name,  result[0].ip, result[0].whois, result[0].hostedat]
                }
                resolve(arrayResult) 
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    })
}

export default selectDomain;