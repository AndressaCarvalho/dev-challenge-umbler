import serviceDomain from '../services/DomainService.js';

class DomainController {
    homeView(req, res) {
        res.render('home');
    }

    findDomain(req, res) {
        const finalValue = serviceDomain(req.query.txt-search);

        res.send(`Resultado: ${finalValue}`);
        console.log(`Resultado: ${finalValue}`);
    }
}

export default new DomainController();