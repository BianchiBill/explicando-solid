interface Logger {
    log(mensagem: string): void;
}

class ConsoleLogger implements Logger {
    log(mensagem: string): void {
        console.log(`Log: ${mensagem}`);
    }
}

class FileLogger implements Logger {
    log(mensagem: string): void {
        console.log(`Gravando em arquivo: ${mensagem}`);
    }
}

class UsuarioService {
    constructor(private logger: Logger) {}

    salvarUsuario(nome: string): void {
        this.logger.log(`Usuário ${nome} salvo no banco de dados.`);
    }
}

// Uso
const service1 = new UsuarioService(new ConsoleLogger());
service1.salvarUsuario("João");

const service2 = new UsuarioService(new FileLogger());
service2.salvarUsuario("Maria");
