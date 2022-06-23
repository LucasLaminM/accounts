// módulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

// módulos externos
import fs from 'fs'

//console.log('iniciamos o Accounts')
operation()

function operation () {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
     },
    ]).then((answer) => {

        const action = answer['action']

        if(action == 'Criar Conta') {
            createAccount()
        }

    })
    .catch((err)=> console.log(err))
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por usar o nosso Banco! :)'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}