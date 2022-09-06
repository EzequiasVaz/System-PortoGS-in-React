import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { IBankProps } from "../interfaces/bankProps"

type APIContextProps = {
    children: ReactNode
}

type BankContextData = {
    bankList: IBankProps[],
    setBankList: (newState: []) => void
}

const initialValue = {
    bankList: [],
    setBankList: () => { }
}

const APIContext = createContext<BankContextData>(initialValue)

export function ListBankAPIContextProvider({ children }: APIContextProps) {
    const [bankList, setBankList] = useState(initialValue.bankList)

    useEffect(() => {
        fetch('https://brasilapi.com.br/api/banks/v1').then(response => response.json()).then(json => {
            setBankList(json)
        }).catch(error => {
            console.log('Ocorreu um erro ' + error)
        })
    }, [])

    return (
        <APIContext.Provider value={{ bankList, setBankList }}>
            {children}
        </APIContext.Provider>
    )
}


//Caso queira usar a API, só desestruturar ela no arquivo que for utilizá-la const {bankList, setBankList} = UseBankListAPI()
export function UseBankListAPI() {
    const context = useContext(APIContext)
    if (context == undefined) {
        throw new Error('Context deve ser usado com um Provider');
    }
    return context
}