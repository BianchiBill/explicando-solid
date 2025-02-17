class GeradorDeRelatorio {
    gerar(dados: string): string {
        return `Relatório: ${dados}`;
    }
}

class Impressora {
    imprimir(texto: string): void {
        console.log(`Imprimindo: ${texto}`);
    }
}

// Uso
const relatorio = new GeradorDeRelatorio().gerar("Vendas Mensais");
new Impressora().imprimir(relatorio);
