# Single Responsibility Principle (SRP)

## Definição

O Princípio da Responsabilidade Única (SRP - Single Responsibility Principle) afirma que uma classe deve ter apenas um motivo para mudar. Isso significa que uma classe deve ter apenas uma única responsabilidade dentro do sistema.

## Motivação

Quando uma classe tem múltiplas responsabilidades, qualquer alteração em uma funcionalidade pode impactar outras partes do código, tornando o sistema mais difícil de manter e propenso a erros.

## Exemplo de Código

### Código comum (Violando SRP)

```typescript
class Relatorio {
    gerarPDF(dados: string) {
        console.log("Gerando PDF...");
    }

    salvarNoBanco(dados: string) {
        console.log("Salvando no banco de dados...");
    }
}
```

Nesse exemplo, a **classe** Relatorio tem duas responsabilidades: gerar um PDF e salvar dados no banco de dados. Isso vai contra o SRP.

### Código aplicando SRP
```typescript
class GeradorDePDF {
    gerar(dados: string) {
        console.log("Gerando PDF...");
    }
}

class RepositorioDeRelatorio {
    salvar(dados: string) {
        console.log("Salvando no banco de dados...");
    }
}
```

Agora, cada classe tem uma única responsabilidade, facilitando a manutenção e evolução do código.

## Benefícios do SRP

- Código mais modular e reutilizável.
- Redução do impacto de mudanças.
- Facilita a testabilidade e entendimento do código.

## Conclusão

Aplicar o SRP "melhora" a qualidade do código, tornando-o mais robusto e fácil de manter. Sempre que uma classe parecer estar fazendo muitas coisas diferentes, considere dividir suas responsabilidades.
