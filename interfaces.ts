interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: "Elefante",
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

// animal.executarRugido("s");
// Argument of type 'string' is not assignable to parameter of type 'number'.

const felino: IFelino = {
    nome: "Leão",
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    visaoNoturna: true
}