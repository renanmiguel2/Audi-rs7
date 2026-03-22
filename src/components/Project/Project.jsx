import Design from "../../img/imgDesign/rs7Design.avif"
function Project () {
    return (
        <div>
            <div className="px-6 md:px-30 mt-15 ">
                <h1 className="text-3xl md:text-5xl font-medium Darker">Audi RS 7 Performance 2026</h1>
                <p className="text-gray-400 text-[10px] md:text-sm">Clique em 'Continuar a compilação' para configurar opções adicionais.</p>
            </div>
            <div className="flex flex-col items-center mt-5 md:mt-20">
                <h1 className="text-5xl md:text-7xl font-semibold Darker">Projeto</h1>
                <img src={Design} className="mt-10 md:mt-15 w-full max-w-400 " alt="Design" />
            </div>
                <div className="px-6 md:px-30 mt-5">
                    <h2 className="text-2xl md:text-4xl font-medium Darker">Elementos anteriores.</h2>
                    <p className="text-gray-400 text-sm md:text-md">O RS 7 Performance apresenta elementos externos em cinza fosco, incluindo molduras das janelas, capas dos espelhos e detalhes de acabamento.</p>
                </div>
        </div>
    )
}
export default Project