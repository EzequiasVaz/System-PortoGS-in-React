export function MenuTop() {

    return (
        <header className="flex bg-gray-one text-gray-ninth w-full h-[80px] pl-36 pr-10 items-center">

            <div className="flex w-full justify-between">

                <div className="">
                    <img src="/PORTOGS_logotipo_branco.png" alt="Logotipo da empresa" />
                </div>

                <div className="flex items-end">
                    <p className="text-[#fff]">Bem vindo, úsuario logado</p> {/*Aqui será o nome do úsuario logado no momento, através da auth*/}
                </div>

                <nav className="flex items-end">
                    <button className="">
                        <img src="/userOptionsIcon.svg" alt="Botão de opções do úsuario" />
                    </button>
                </nav>

            </div>

        </header>
    )
}