const identificarTipo = (parametro: any): string => {
    if (typeof parametro) {
        return typeof parametro;
    } else {
        return "Tipo não identificado."
    }
}

console.log(identificarTipo("o/"))
