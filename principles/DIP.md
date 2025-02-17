# Dependency Inversion Principle (DIP)

## Definição
O Princípio da Inversão de Dependência (DIP - Dependency Inversion Principle) afirma que:
1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

## Motivação
Sem DIP, um código pode ficar acoplado a implementações específicas, dificultando a manutenção. O DIP em tese promove a flexibilidade ao permitir que as dependências sejam injetadas e trocadas facilmente.

## Exemplo de Código
### Código comum (não utilizando DIP)
```typescript
class MySQLDatabase {
    salvar(dados: string): void {
        console.log(`Salvando no MySQL: ${dados}`);
    }
}

class UsuarioService {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase(); // Forte acoplamento
    }

    salvarUsuario(nome: string): void {
        this.database.salvar(nome);
    }
}
```
A classe `UsuarioService` está diretamente dependente da implementação `MySQLDatabase`, dificultando a troca para outro banco de dados.

### Código Aplicando DIP
```typescript
interface Database {
    salvar(dados: string): void;
}

class MySQLDatabase implements Database {
    salvar(dados: string): void {
        console.log(`Salvando no MySQL: ${dados}`);
    }
}

class MongoDBDatabase implements Database {
    salvar(dados: string): void {
        console.log(`Salvando no MongoDB: ${dados}`);
    }
}

class UsuarioService {
    private database: Database;

    constructor(database: Database) {
        this.database = database; // Dependência injetada
    }

    salvarUsuario(nome: string): void {
        this.database.salvar(nome);
    }
}

// Uso flexível
const mysqlService = new UsuarioService(new MySQLDatabase());
const mongoService = new UsuarioService(new MongoDBDatabase());

mysqlService.salvarUsuario("João");
mongoService.salvarUsuario("Maria");
```
Agora, `UsuarioService` não depende diretamente de uma implementação específica, mas de uma abstração (`Database`). Isso permite trocar facilmente o banco de dados sem modificar `UsuarioService`.

## Benefícios do DIP
- Reduz o acoplamento entre módulos.
- Talvez facilite a substituição de implementações.
- Melhora a testabilidade do código.

## Conclusão
Seguir o DIP torna o código mais modular e flexível. Sempre que uma classe depender diretamente de outra implementação, considere introduzir uma abstração para reduzir o acoplamento.

