import { MenuLeft } from "../components/MenuLeft";
import { MenuTop } from "../components/MenuTop";

export function UserPanel() {

    ////Caso queira testar a API do banco é só dar const {bankList, setBankList} = UseBankListAPI() || Desestruturação
    return (
        <>
            <MenuTop />
            <MenuLeft />
        </>
    )
}