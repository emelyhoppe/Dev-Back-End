let pessoa = {
    idade: 16,
    cnh: false,
    autorizacao:true
}

if (pessoa.idade >= 18 && pessoa.cnh == true && pessoa.autorizacao == true){
    console.log("Você está lioberado.")
}
else if (pessoa.idade >= 18 && pessoa.cnh == false && pessoa.autorizacao == true || pessoa.idade < 18 && pessoa.autorizacao == true){
    console.log("Autorizado, só não pode dirigir")
}
else if (pessoa.idade >= 18 && pessoa.cnh == true && pessoa.autorizacao == false){
    console.log("Não autorizado mas pode dirigir")
}
else{
    console.log("Não está autorizado, não pode dirigir ou é menor de 18")
}