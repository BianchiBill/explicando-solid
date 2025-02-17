class Logger {
    log(mensagem) {
        throw new Error("Método não implementado");
    }
}

class ConsoleLogger extends Logger {
    log(mensagem) {
        console.log(`Log: ${mensagem}`);
    }
}

class FileLogger extends Logger {
    log(mensagem) {
        // Simulando gravação em arquivo
        console.log(`Gravando em arquivo: ${mensagem}`);
    }
}

class UsuarioService {
    constructor(logger) {
        this.logger = logger;
    }

    salvarUsuario(nome) {
        this.logger.log(`Usuário ${nome} salvo no banco de dados.`);
    }
}

// Uso
const service1 = new UsuarioService(new ConsoleLogger());
service1.salvarUsuario("João");

const service2 = new UsuarioService(new FileLogger());
service2.salvarUsuario("Maria");
