# Open/Closed Principle (OCP)

## Definição
O Princípio Aberto/Fechado (OCP - Open/Closed Principle) afirma que entidades de software (classes, módulos, funções) devem estar abertas para extensão, mas fechadas para modificação. Isso significa que devemos ser capazes de adicionar novos comportamentos sem alterar o código existente.

## Motivação
Alterar código existente pode introduzir bugs inesperados e gerar retrabalho. Seguindo o OCP, podemos adicionar funcionalidades sem modificar a estrutura já implementada, tornando o código mais estável e fácil de manter.

## Exemplo de Código
### Código comum (Violando OCP)
```typescript
class CalculadoraDeSalario {
    calcular(tipo: string, salario: number): number {
        if (tipo === "CLT") {
            return salario - (salario * 0.2);
        } else if (tipo === "PJ") {
            return salario - (salario * 0.1);
        }
        return salario;
    }
}
```
Neste exemplo, sempre que um novo tipo de funcionário for adicionado, será necessário modificar a classe `CalculadoraDeSalario`, violando o OCP.

### Código Aplicando OCP
```typescript
interface RegraDeCalculo {
    calcular(salario: number): number;
}

class CLT implements RegraDeCalculo {
    calcular(salario: number): number {
        return salario - (salario * 0.2);
    }
}

class PJ implements RegraDeCalculo {
    calcular(salario: number): number {
        return salario - (salario * 0.1);
    }
}

class CalculadoraDeSalario {
    calcular(salario: number, regra: RegraDeCalculo): number {
        return regra.calcular(salario);
    }
}
```
Agora, novas regras podem ser adicionadas sem modificar a classe `CalculadoraDeSalario`, respeitando o OCP.

## Benefícios do OCP
- Redução de modificações no código existente.
- Facilita a adição de novas funcionalidades.
- Código mais modular e reutilizável.

## Conclusão
Seguir o OCP 'melhora' a escalabilidade e manutenção do código, tornando-o mais robusto e preparado para futuras mudanças. Sempre que precisar adicionar uma nova funcionalidade, pense em como fazê-lo sem modificar o código já existente.

