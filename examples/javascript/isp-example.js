class Trabalhador {
    trabalhar() {
        throw new Error("Método não implementado");
    }
}

class SerVivo {
    comer() {
        throw new Error("Método não implementado");
    }
}

class Humano extends Trabalhador {
    trabalhar() {
        console.log("Trabalhando...");
    }

    comer() {
        console.log("Comendo...");
    }
}

class Robo extends Trabalhador {
    trabalhar() {
        console.log("Trabalhando como um robô...");
    }
}

// Uso
const humano = new Humano();
humano.trabalhar();
humano.comer();

const robo = new Robo();
robo.trabalhar();
