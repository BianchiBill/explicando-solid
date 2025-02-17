interface Trabalhavel {
    trabalhar(): void;
}

interface Alimentavel {
    comer(): void;
}

class Humano implements Trabalhavel, Alimentavel {
    trabalhar(): void {
        console.log("Trabalhando...");
    }

    comer(): void {
        console.log("Comendo...");
    }
}

class Robo implements Trabalhavel {
    trabalhar(): void {
        console.log("Trabalhando como um robô...");
    }
}

// Uso
const humano = new Humano();
humano.trabalhar();
humano.comer();

const robo = new Robo();
robo.trabalhar();
