function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasDigit = /\d/.test(password);
    const noIPL = !/ipl/i.test(password);

    return hasMinLength && hasSpecialChar && hasDigit && noIPL;
}

module.exports = { validatePassword };