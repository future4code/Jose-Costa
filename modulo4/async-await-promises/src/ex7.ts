// Desafio:

const sayHello = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Oi") }, 5000);
    }).then((res) => { console.log(res)}) 
}

sayHello();