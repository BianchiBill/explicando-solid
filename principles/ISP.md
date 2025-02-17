# Interface Segregation Principle (ISP)

## Definição
O Princípio da Segregação de Interfaces (ISP - Interface Segregation Principle) afirma que uma classe não deve ser forçada a implementar interfaces que não utiliza. Em outras palavras, é melhor ter várias interfaces pequenas e específicas do que uma interface grande e genérica.

## Motivação
Se uma interface tem muitos métodos que nem todas as classes precisam, as classes acabam sendo obrigadas a implementar métodos irrelevantes, violando o ISP. Isso pode levar a código desnecessário e difícil de manter.

## Exemplo de Código
### Código cmoum (não usa ISP)
```typescript
interface Trabalhador {
    trabalhar(): void;
    comer(): void;
    dormir(): void;
}

class Robo implements Trabalhador {
    trabalhar(): void {
        console.log("Trabalhando...");
    }

    comer(): void {
        throw new Error("Robôs não comem!");
    }

    dormir(): void {
        throw new Error("Robôs não dormem!");
    }
}
```
A classe `Robo` é forçada a implementar métodos que não fazem sentido para ela.

### Código Aplicando ISP
```typescript
interface Trabalhador {
    trabalhar(): void;
}

interface SerVivo {
    comer(): void;
    dormir(): void;
}

class Humano implements Trabalhador, SerVivo {
    trabalhar(): void {
        console.log("Trabalhando...");
    }

    comer(): void {
        console.log("Comendo...");
    }

    dormir(): void {
        console.log("Dormindo...");
    }
}

class Robo implements Trabalhador {
    trabalhar(): void {
        console.log("Trabalhando...");
    }
}
```
Agora, cada classe implementa apenas as interfaces relevantes para ela.

## Benefícios do ISP
- Evita implementação de métodos desnecessários.
- Talvez maior flexibilidade e menor manutenção do código.
- Reduz o acoplamento entre classes.

## Conclusão
O ISP melhora a organização do código ao garantir que cada classe implemente apenas o que realmente precisa. Sempre que uma interface parecer muito grande, considere dividi-la em interfaces menores e mais específicas.

