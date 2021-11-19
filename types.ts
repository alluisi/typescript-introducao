interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: "pequeno" | "médio" | "grande";
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    nome: "Cachorro",
    tipo: "terrestre",
    domestico: true,
    porte: "médio"
}
