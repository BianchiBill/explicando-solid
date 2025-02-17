class Notificador {
    enviar(mensagem) {
        throw new Error("Método não implementado");
    }
}

class EmailNotificador extends Notificador {
    enviar(mensagem) {
        console.log(`Enviando email: ${mensagem}`);
    }
}

class SMSNotificador extends Notificador {
    enviar(mensagem) {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

// Uso
function notificarUsuario(notificador, mensagem) {
    notificador.enviar(mensagem);
}

notificarUsuario(new EmailNotificador(), "Promoção especial!");
notificarUsuario(new SMSNotificador(), "Seu pedido foi enviado!");
