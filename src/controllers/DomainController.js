import domainService from '../services/DomainService.js';

class DomainController {
    homeView(req, res) {
        res.render('home')
    }

    domainConsole(domain) {
        const result = domainService.serviceDomain(domain)
        return result.then(console.log)
    }

    domainView(req, res) {
        const response = domainService.serviceDomain(req.query.txtsearch)

        response.then(function(result) {
            res.render('home', {
                dataDomain: '\nName: ' + result.Name + '\nIP: ' + result.IP + '\nWhois: ' + result.Whois + '\nHosted at: ' + result.HostedAt 
            })
        })
    }
}

export default new DomainController();