type Error = { [index: string]: { statusCode: number, msg: string } }

export const errors: Error = {
    "422": {
        statusCode: 422,
        msg: "Erro na requisição: verifique se os dados necessários foram inseridos corretamente.",
    },
    "400": {
        statusCode: 400,
        msg: "Erro genérico na requisição.",
    },
    "409": {
        statusCode: 409,
        msg: "Erro na requisição: tentativa de criar um registro já existente.",
    },
   "default": {
       statusCode: 500,
       msg: "Erro interno no servidor. Aguarde uns instantes e tente novamente."
   }
}
