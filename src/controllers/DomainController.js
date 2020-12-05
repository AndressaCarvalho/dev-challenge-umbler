import api from '../services/api.js';

class DomainController {
    homeView(req, res) {
        res.render('home')
    }

    domainConsole(domain) {
        const result = api(domain)
        return result.then(console.log)
    }

    domainView(req, res) {
        const response = api(req.query.txtsearch)

        response.then(function(result) {
            res.render('home', {
                dataDomain: JSON.stringify(result, null, "\t")
            })
        })
    }
}

export default new DomainController();