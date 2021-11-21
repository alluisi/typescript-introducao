function adicionarApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionarApendiceALista([1, 2, 3], 1);
// function adicionarApendiceALista<number>(array: number[], valor: number): number[]

adicionarApendiceALista(["A", "B", "C"], "d");
// function adicionarApendiceALista<string>(array: string[], valor: string): string[]

adicionarApendiceALista([1, 2, 3], "d");
// Argument of type 'string' is not assignable to parameter of type 'number'.