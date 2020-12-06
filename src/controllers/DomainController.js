import serviceDomain from '../services/DomainService.js';

class DomainController {
    homeView(req, res) {
        res.render('home')
    }

    domainConsole(domain) {
        const result = serviceDomain.apiDomain(domain)
        return result.then(console.log)
    }

    domainView(req, res) {
        const response = serviceDomain.apiDomain(req.query.txtsearch)

        response.then(function(result) {
            res.render('home', {
                dataDomain: '\n' + result[0] + '\n' + result[1] + '\n' + result[2]
            })
        })
    }
}

export default new DomainController();