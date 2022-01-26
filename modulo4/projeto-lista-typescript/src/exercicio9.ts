const identificaQuantidadeAnagramas = (palavra: string) => {
    let anagrama: number = 1;
    if (palavra.length === 1 || palavra.length === 0) { anagrama = 1; }
    else {
        for (let i = palavra.length; i > 0; i--) {
            anagrama *= i;
        }
    }
    return anagrama;
}

console.log(identificaQuantidadeAnagramas("mesa"))