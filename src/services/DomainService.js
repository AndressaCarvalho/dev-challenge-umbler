import whois  from 'whois-json';
import dns from 'dns';
import selectDomain from '../database/operations/DomainSelect.js';
import addDomain from '../database/operations/DomainAdd.js';

class DomainService {
    async apiDomain (domain) {
        let domainResult = []
        let domainResultFind = []
        
        domainResult = await selectDomain(domain)

        if (domainResult == '') { 
            domainResultFind = await this.findDomain(domain)
            if (domainResultFind != '') {
                domainResult = await addDomain(domainResultFind)
            }
        }

        return domainResult
    }


    async findDomain (domain) {
        let arrayResult = []
        let whoisResult = ''
        let ipAddress = 0

        let resultsWhois = await whois(domain)
        if (resultsWhois.domainName) {
            whoisResult = JSON.stringify(resultsWhois, null, 2)

            ipAddress = await this.lookupPromise(domain)
            if (ipAddress != '') {
                arrayResult = [domain, ipAddress, whoisResult]
            }
        }
        

        return arrayResult
    }


    async lookupPromise (domain) {
        return new Promise((resolve, reject) => {
            dns.lookup(domain, (err, address, family) => {
                if(err) reject('error')
                resolve(address)
            })
        })
    }
}


export default new DomainService();