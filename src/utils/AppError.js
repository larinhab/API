// Padronizar o tipo de mensagem que vai aparecer quando eu tiver algum tipo de exceção


class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}

module.exports = AppError