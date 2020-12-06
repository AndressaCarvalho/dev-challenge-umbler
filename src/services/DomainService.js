import whois  from 'whois-json';
import dns from 'dns';
import selectDomain from '../database/operations/DomainSelect.js';
import addDomain from '../database/operations/DomainAdd.js';

class DomainService {
    async serviceDomain (domain) {
        let domainResult = {}
        let domainResultsFind = {}
        
        domainResult = await selectDomain(domain)

        if (domainResult == 0) { 
            domainResultsFind = await this.findDomain(domain)
            if (domainResultsFind != 0) {
                domainResult = await addDomain(domainResultsFind)
            }
        }
        
        return JSON.parse(JSON.stringify(domainResult))
    }


    async findDomain (domain) {
        let results = {}
        let whoisResult = ''
        let ipAddress = ''

        let resultsWhois = await whois(domain)
        if (resultsWhois.domainName) {
            whoisResult = JSON.stringify(resultsWhois, null, 2)

            ipAddress = await this.lookupPromise(domain)
            if (ipAddress != '') {
                results = {Name : domain, IP : ipAddress, Whois : whoisResult, HostedAt : ''}
            }
        } else {
            results = 0
        }
        

        return results
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