interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: "gertente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ("cargo" in usuario) {
        // redirecionar para a área administrativa
    }

    // redirecionar para a área do usuário
}