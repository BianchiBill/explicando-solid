# Liskov Substitution Principle (LSP)

## Definição
O Princípio da Substituição de Liskov (LSP - Liskov Substitution Principle) afirma que objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar o comportamento correto do programa.

## Motivação
Se uma subclasse altera o comportamento esperado de uma classe base de forma inesperada, isso pode causar falhas. O LSP ajuda que as subclasses preservem a integridade do sistema.

## Exemplo de Código
### Código Cmoum (não utilizando LSP)
```typescript
class Retangulo {
    constructor(protected largura: number, protected altura: number) {}

    setLargura(largura: number) {
        this.largura = largura;
    }

    setAltura(altura: number) {
        this.altura = altura;
    }

    getArea(): number {
        return this.largura * this.altura;
    }
}

class Quadrado extends Retangulo {
    setLargura(largura: number) {
        this.largura = largura;
        this.altura = largura; // Altera comportamento esperado
    }

    setAltura(altura: number) {
        this.largura = altura;
        this.altura = altura; // Altera comportamento esperado
    }
}
```
Neste exemplo, `Quadrado` altera a lógica da classe base `Retangulo`, violando o LSP.

### Código Aplicando LSP
```typescript
interface Forma {
    getArea(): number;
}

class Retangulo implements Forma {
    constructor(protected largura: number, protected altura: number) {}

    getArea(): number {
        return this.largura * this.altura;
    }
}

class Quadrado implements Forma {
    constructor(protected lado: number) {}

    getArea(): number {
        return this.lado * this.lado;
    }
}
```
Agora, `Quadrado` e `Retangulo` seguem a mesma interface `Forma`, garantindo que qualquer instância de `Forma` possa ser substituída corretamente.

## Benefícios do LSP
- Evita comportamentos inesperados em herança.
- Código mais previsível e seguro.
- Facilita a reutilização e manutenção.

## Conclusão
O LSP reforça o conceito de que uma subclasse deve sempre ser substituível por sua classe base sem causar problemas. Sempre que uma subclasse precisar modificar muito o comportamento da classe base, considere se realmente há uma relação de herança válida.

