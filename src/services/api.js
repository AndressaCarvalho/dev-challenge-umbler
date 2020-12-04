import whois  from 'whois-json';
import dns from 'dns';

async function apiDomain (domain) {
    let arrayResult = [1]
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

async function lookupPromise(domain){
    return new Promise((resolve, reject) => {
        dns.lookup(domain, (err, address, family) => {
            if(err) reject(err);
            resolve(address);
        });
   });
};

export default apiDomain;