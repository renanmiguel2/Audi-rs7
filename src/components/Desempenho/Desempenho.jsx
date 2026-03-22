import Motor from "../../img/imgMotor/rs7Motor.avif"
function Desempenho() {
    const description = [
        {title: "Tipo de motor", subtitle: "V8"},
        {title: "Transmissão", subtitle: "8 velocidades", tipo:"Tiptronic"},
        {title: "Números de turbos", subtitle:"2"}
    ]
    return (
        <div>
            <h1 className="text-5xl md:text-7xl font-semibold Darker text-center mt-5 md:mt-10 tracking-wider">Desempenho</h1>
            <div className="grid md:grid-cols-3 gap-px px-5 md:px-20 mt-10 md:mt-20">
                {description.map((desc) => (
                    <div className="grid items-center text-center bg-[#34363b] rounded-2xl py-5 gap-2" key={desc.title}>
                        <h1 className="text-gray-400">{desc.title}</h1>
                        <p className="text-4xl md:text-5xl">{desc.subtitle}</p>
                        <p className="text-gray-400">{desc.tipo}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 md:mt-20">
                <div className="flex items-center justify-center">
                    <img src={Motor} className="w-full max-w-400 px-5 md:px-0" alt="Motor" />
                </div>
                <div className="px-6 md:px-30 mt-5 max-w-7/8">
                    <h1 className="Darker text-3xl font-semibold">Potência V8.</h1>
                    <p className="text-gray-400 text-sm md:text-lg">Com seu motor de 4 litros e 8 cilindros com dois turbocompressores em formato de V, a potência do RS 7 é evidente. Seu conjunto motopropulsor permite uma potência de 621 cv, resultando em uma aceleração de 0 a 100 km/h em impressionantes 3,3 segundos.</p>
                </div>
            </div>
        </div>
    )
}
export default Desempenho