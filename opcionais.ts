interface IUsuario {
    id: string;
    email: string;
    cargo?: "gertente" | "coordenador" | "supervisor" | "funcionario";
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }

    // redirecionar para a área do usuário
}