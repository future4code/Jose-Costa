export const irHome = (navigate) => {
    navigate("/");
}

export const irCadastro = (navigate) => {
    navigate("/cadastro")
}

export const irLogin = (navigate) => {
    navigate("/login");
}

export const irFeed = (navigate) => {
    navigate("/feed");
}

export const irPosts = (navigate, id) => {
    navigate(`/post/${id}`);
}