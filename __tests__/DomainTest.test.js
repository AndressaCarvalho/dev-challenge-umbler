import serviceDomain from './services/DomainService.js';
let result;


describe('Finding for a domain', () => {
    it('The IP address should match with \'187.84.237.146\' when it receives \'umbler.com\' as parameter', () => {
        result = serviceDomain('umbler.com');
        let ipTest = '187.84.237.146';

        expect(result[1]).toBe(ipTest);
    });

    it('Should return 0 when it receives \'nonexistentdomain41890.com\' as parameter', () => {
        result = serviceDomain('nonexistentdomain41890.com');
        let arrayTest = [];

        expect(result).toBe(arrayTest);
    });
});