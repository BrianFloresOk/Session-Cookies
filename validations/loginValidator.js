const { check } = require('express-validator')

const loginValidations = [
    check("nombre")
        .notEmpty()
        .withMessage("Complete este campo"),
    check("email")
        .notEmpty().withMessage("Complete este campo")
        .isEmail().withMessage("Debe ingresar un email válido"),
    check("color").notEmpty().withMessage("Debe seleccionar un color")
]

module.exports = loginValidations