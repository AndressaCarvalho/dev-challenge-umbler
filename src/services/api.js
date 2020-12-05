import whois  from 'whois-json';
import dns from 'dns';
import databaseDomain from '../database/DatabaseConnection.js';

async function apiDomain (domain) {
    let domainResult = []
    let domainResultFind = []
    
    domainResult = await selectDomain(domain)

    if (domainResult == '') { 
        domainResultFind = await findDomain(domain)
        if (domainResultFind != '') {
            domainResult = await addDomain(domainResultFind)
        }
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
    if (resultsWhois.domainName) {
        whoisResult = JSON.stringify(resultsWhois, null, 2)

        ipAddress = await lookupPromise(domain)
        if (ipAddress != '') {
            arrayResult = [domain, ipAddress, whoisResult]
        }
    }
    

    return arrayResult
}


async function addDomain (arrayDomain) {
    const connection = databaseDomain()

    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO domains (name, ip, whois) VALUES (?)'
        connection.query(sql, [arrayDomain], function (error, result) {
            if (error) {
                console.log(error)
                reject(error)
            }
            connection.end()
            resolve(arrayDomain)
        });
    });
}


async function lookupPromise (domain) {
    let address = ''

    return new Promise((resolve, reject) => {
        dns.lookup(domain, (err, address, family) => {
            if(err) reject('error')
            resolve(address)
        });
   });
}



export default apiDomain;