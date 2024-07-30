import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';   
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto')
    .option('-d, --destino <string>', 'caminho da pasta de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red('Erro: insira camminho de origem e destino válidos'));
            program.helps();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestinho = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestinho);
            console.log(chalk.green('Texto processado com sucesso'));
        } catch(erro) {
            console.log('Ocorreu um erro no processamento', erro)
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
        if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch(erro) {
            trataErros(erro);
        }
    })

}


function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    
    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log('Arquivo criado com sucesso');
        }).catch((erro) => {
            throw erro;
        }).finally(() => console.log('Operação finalizada'))
          
}


//async function criaESalvaArquivo(listaPalavras, endereco) {
//    const arquivoNovo = `${endereco}/resultado.txt`;
//    const textoPalavras = JSON.stringify(listaPalavras);
//    try {
//        await fs.promises.writeFile(arquivoNovo, textoPalavras);
//        console.log('Arquivo criado com sucesso');
//    } catch(erro) {
//        throw erro;
//    }
//}
