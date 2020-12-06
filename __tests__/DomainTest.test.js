import serviceDomain from '../src/services/DomainService.js';
let response;


describe('Finding for a domain', () => {
    it('The IP address should be \'187.84.237.146\' when it receives \'umbler.com\' as parameter', () => {
        response = serviceDomain.apiDomain('umbler.com')

        response.then(function(result) {
            expect(result[1]).toBe('187.84.237.146') 
        })
    });

    it('Should return [] when it receives \'udheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878747.com\' as parameter', () => {
        response = serviceDomain.apiDomain('udheojaaeofpashefispjfudheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878746uehfuabfjeufgesiyfhd5448784876846878747.com')

        response.then(function(result) {
            expect(result).toEqual([]);
        })
    });
});