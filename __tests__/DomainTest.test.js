import api from '../src/services/api.js';
let response;


describe('Finding for a domain', () => {
    it('The IP address should match with \'187.84.237.146\' when it receives \'umbler.com\' as parameter', () => {
        response = api('umbler.com');

        expect(JSON.stringify(response[1], null, "\t")).toBe('187.84.237.146');
    });

    it('Should return a empty object when it receives \'udheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878747.com\' as parameter', () => {
        let stringTest = {};
        response = api('udheojaaeofpashefispjfudheojaaeofpashefispjfuehfuabfjeuf545gesiyfhd5448784876846878746uehfuabfjeufgesiyfhd5448784876846878747.com');

        expect(JSON.stringify(response, null, "\t")).toBe(JSON.stringify(stringTest, null, "\t"));
    });
});