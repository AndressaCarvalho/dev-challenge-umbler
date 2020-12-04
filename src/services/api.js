import whois  from 'whois-json';
import dns from 'dns';
import databaseDomain from '../database/DatabaseConnection.js';

async function apiDomain (domain) {
    let domainResult = await selectDomain(domain)

    if (domainResult == '') { 
        // let domainResultFind = await findDomain(domain)
        // domainResult = await addDomain(domainResultFind)
        domainResult = await findDomain(domain)
    }

    return domainResult
}


async function selectDomain (domain) {
    let arrayResult = []
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
                arrayResult = [result[0].name, result[0].ip, result[0].whois, result[0].hostedat]
            }
            resolve(arrayResult)
        });
    });
}


async function findDomain (domain) {
    let arrayResult = []
    let whoisResult = ''
    let ipAddress = 0

    let resultsWhois = await whois(domain)
    whoisResult = JSON.stringify(resultsWhois, null, 2)

    ipAddress = await lookupPromise(domain)

    if (whoisResult != '' && ipAddress != '') {
        arrayResult = [whoisResult, ipAddress]
    }
    return arrayResult
}


async function lookupPromise (domain) {
    return new Promise((resolve, reject) => {
        dns.lookup(domain, (err, address, family) => {
            if(err) reject(err);
            resolve(address);
        });
   });
}

export default apiDomain;