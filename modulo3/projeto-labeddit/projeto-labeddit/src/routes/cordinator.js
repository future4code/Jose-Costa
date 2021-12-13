export const irHome = (navigate) => {
    navigate("/")
}

export const irCadastro = (navigate) => {
    navigate("/cadastro")
}

export const irLogin = () => {
    navigate("/login")
}

export const irFeed = () => {
    navigate("/feed")
}

export const irPosts = (navigate, id) => {
    navigate(`/post/${id}`)
}