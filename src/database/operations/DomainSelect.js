import databaseDomain from '../DatabaseConnection.js';

async function selectDomain (domain) {
    let results = {}
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        connection.select('*').from('domains').where('name', domain).then(function(result){
            try {
                if (result != '') {
                    results = {Name : result[0].name, IP : result[0].ip, Whois : result[0].whois, HostedAt : result[0].hostedat}
                } else {
                    results = 0
                }
                resolve(results) 
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    })
}

export default selectDomain;