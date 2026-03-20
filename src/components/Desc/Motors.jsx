function Motors () {
    const desc = [
        {
            title: "Cavalos",
            subtitle: "621",
            medida: "HP"
        },
        {
            title: "Torque",
            subtitle: "627",
            medida: "lb-pé"
        },
        {
            title :"0-60mph em",
            subtitle: "3.3",
            medida: "seg",
            descricao: "Respeite sempre todas as leis de trânsito e de velocidade."
        }
    ]
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-px px-5 md:px-20">
                {desc.map((des) => (
                    <div className="flex items-center justify-center flex-col bg-[#34363b] rounded-2xl py-6" key={des.title}>
                        <p className="text-gray-400">{des.title}</p>
                        <div className="flex gap-2 mt-2">
                            <h1 className="text-5xl tracking-widest">{des.subtitle}</h1>
                            <p className=" flex items-center text-gray-400">{des.medida}</p>
                        </div>
                        {des.descricao && (
                            <p className="text-gray-300 mt-2 text-center">{des.descricao}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Motors