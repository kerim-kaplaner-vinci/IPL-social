const { validatePassword } = require('../src/passwordChecker');

test('Mot de passe valide', () => {
    expect(validatePassword('P@ssw0rd123')).toBe(true);
});

test('Mot de passe trop court', () => {
    expect(validatePassword('P@1')).toBe(false);
});

test('Pas de caractère spécial', () => {
    expect(validatePassword('Password1')).toBe(false);
});

test('Pas de chiffre', () => {
    expect(validatePassword('Password@')).toBe(false);
});

test('Contient "IPL"', () => {
    expect(validatePassword('P@ssIPL123')).toBe(false);
});
