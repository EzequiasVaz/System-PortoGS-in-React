import { useEffect } from 'react'

// Exportando lista de bancos cadatrados no brasil, para o usuário informar junto ao cadastro de propostas

export const listBanks = () => {

    const res = useEffect(() => {
        fetch('https://brasilapi.com.br/api/banks/v1').then(response => response.json()).then(json => {

            console.log(json)

        }).catch(error => {
            console.log('Ocorreu um erro ' + error)
        })
    })


}