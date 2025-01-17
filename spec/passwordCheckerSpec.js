const { validatePassword } = require('../src/passwordChecker');

describe('Validation du mot de passe', () => {
    it('doit accepter un mot de passe valide', () => {
        expect(validatePassword('P@ssw0rd123')).toBe(true);
    });

    it('doit rejeter un mot de passe trop court', () => {
        expect(validatePassword('P@1')).toBe(false);
    });

    it('doit rejeter un mot de passe sans caractère spécial', () => {
        expect(validatePassword('Password1')).toBe(false);
    });

    it('doit rejeter un mot de passe sans chiffre', () => {
        expect(validatePassword('Password@')).toBe(false);
    });

    it('doit rejeter un mot de passe contenant "IPL"', () => {
        expect(validatePassword('P@ssIPL123')).toBe(false);
    });
});
