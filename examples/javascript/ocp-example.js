class Frete {
    calcular(valor) {
        return valor;
    }
}

class FreteExpresso extends Frete {
    calcular(valor) {
        return valor * 1.2;
    }
}

class FreteInternacional extends Frete {
    calcular(valor) {
        return valor * 1.5;
    }
}

function calcularFrete(valor, estrategia) {
    return estrategia.calcular(valor);
}

console.log(calcularFrete(100, new FreteExpresso()));
console.log(calcularFrete(100, new FreteInternacional()));
