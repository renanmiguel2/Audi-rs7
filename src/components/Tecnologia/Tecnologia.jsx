import tecnologia from "../../img/imgTecnologia/rs7Tecnologia.avif"
function Tecnologia() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-semibold Darker text-center mt-5 md:mt-15 tracking-wider">Tecnologia</h1>
                <img src={tecnologia} className="w-full max-w-400 mt-10 md:mt-20 px-6 md:px-0" alt="Tecnologia" />
            </div>
            <div className="px-6 md:px-30 mt-5 max-w-7/8">
                <h1 className="Darker text-3xl font-semibold">Audi virtual cockpit plus</h1>
                <p className="text-gray-400 text-sm md:text-lg">Como um painel de instrumentos digital personalizável, o Audi virtual cockpit plus apresenta informações importantes diretamente no seu campo de visão em uma tela HD impressionante de 12,3". Inclui um novo design de fundo branco selecionável, específico para a versão RS.</p>
            </div>
        </div>
    )
}
export default Tecnologia