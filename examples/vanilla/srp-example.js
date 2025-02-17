class GeradorDeRelatorio {
    gerar(dados) {
        return `Relatório: ${dados}`;
    }
}

class Impressora {
    imprimir(texto) {
        console.log(`Imprimindo: ${texto}`);
    }
}

// Uso
const relatorio = new GeradorDeRelatorio().gerar("Vendas Mensais");
new Impressora().imprimir(relatorio);
