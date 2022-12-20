
import fs from 'fs';
import chalk from 'chalk';

function tratarErro(erro){

throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'))

}
function pegaArquivo(caminhoDoArquivo)
{
    const encoding = 'utf-8';
   
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto))) // Encadeia código assíncron
    
    .catch(tratarErro)

}
pegaArquivo('./arquivos/');