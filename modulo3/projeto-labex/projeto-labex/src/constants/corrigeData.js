// Função para alterar o formato da data internacional para o padrão brasileiro:
export const corrigeData = (data) => {
    if (data.length > 9) {
        const partesData = data.split("-");
        const dia = partesData[2];
        const mes = partesData[1];
        const ano = partesData[0].slice(1 - 3);
        return `${dia}/${mes}/${ano}`;
    } else {
        return data;
    }
}