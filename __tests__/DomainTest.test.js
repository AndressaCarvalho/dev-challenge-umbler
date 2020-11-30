import serviceDomain from './services/DomainService.js';
let result;


describe('Finding for a domain', () => {
    it('The arrays should match when it receives \'umbler.com\' as parameter', () => {
        result = serviceDomain('umbler.com');
        let arrayTest = ['umbler.com','177.55.66.99','ID: FEC276  Titular: RedeHost Internet Ltda.  Nome: Flávio Eduardo Cardoso','Locaweb'];
        let auxTest = 1;
        for (let i = 0; i < result.length; i++) {
            if (arrayTest.charAt(i) != result[y]) {
                auxTest = 0;
            } 
        }

        expect(auxTest).toBe(1);
    });

    it('Should return 0 when it receives \'nonexistentdomain41890.com\' as parameter', () => {
        result = serviceDomain('nonexistentdomain41890.com');
        let arrayTest = [0];

        expect(result).toBe(arrayTest);
    });
});