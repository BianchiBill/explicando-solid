interface Frete {
    calcular(valor: number): number;
}

class FreteNormal implements Frete {
    calcular(valor: number): number {
        return valor;
    }
}

class FreteExpresso implements Frete {
    calcular(valor: number): number {
        return valor * 1.2;
    }
}

class FreteInternacional implements Frete {
    calcular(valor: number): number {
        return valor * 1.5;
    }
}

// Função aberta para extensão
function calcularFrete(valor: number, estrategia: Frete): number {
    return estrategia.calcular(valor);
}

console.log(calcularFrete(100, new FreteExpresso()));
console.log(calcularFrete(100, new FreteInternacional()));
