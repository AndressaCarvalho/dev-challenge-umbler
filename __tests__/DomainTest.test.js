import domainService from '../src/services/DomainService.js';
let response;


describe('Finding for a domain', () => {
    it('The IP address should be \'187.84.237.146\' when it receives \'umbler.com\' as parameter', () => {
        response = domainService.serviceDomain('umbler.com')

        response.then(function(result) {
            expect(result.IP).toBe('187.84.237.146') 
        })
    });

    it('Should return 0 when it receives \'udheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878747.com\' as parameter', () => {
        response = domainService.serviceDomain('udheojaaeofpashefispjfudheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878746uehfuabfjeufgesiyfhd5448784876846878747.com')

        response.then(function(result) {
            expect(result).toBe(0);
        })
    });
});