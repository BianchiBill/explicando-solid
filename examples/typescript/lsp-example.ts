abstract class Notificador {
    abstract enviar(mensagem: string): void;
}

class EmailNotificador extends Notificador {
    enviar(mensagem: string): void {
        console.log(`Enviando email: ${mensagem}`);
    }
}

class SMSNotificador extends Notificador {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

// Uso
function notificarUsuario(notificador: Notificador, mensagem: string): void {
    notificador.enviar(mensagem);
}

notificarUsuario(new EmailNotificador(), "Promoção especial!");
notificarUsuario(new SMSNotificador(), "Seu pedido foi enviado!");
