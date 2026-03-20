import { useRef, useEffect } from "react"
import Motors from "./Motors"

function Description() {
    const obs = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                obs.current.classList.add('animate-fadeIn')
                obs.current.classList.remove('opacity-0')
            }
        })

        if (obs.current) {
            observer.observe(obs.current)
        }

        return () => observer.disconnect()
    }, [])
    const description = [
        {
            title: "Audi RS 7 Performance 2026"
        },
        {
            title: "Projeto"
        },
        {
            title: "Desempenho"
        },
        {
            title: "Tecnologia"
        },
        {
            title: "Assistência de motorista"
        },
        {
            title: "Ferramentas de compras"
        }
    ]

    return (
        <div>
            <div className="hidden md:flex mt-1 px-20 gap-10 Darker text-xl font-semibold">
                {description.map((desc) => {
                    return (
                        <div key={desc.title} className='text-center'>
                            <h3 className="hover:bg-gray-700 px-4 py-2 rounded-2xl duration-300 ease-out cursor-pointer text-gray-300 ">{desc.title}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col items-center mt-20 gap-10 text-center mx-5 md:mx-0 opacity-0" ref={obs}>
                <h1 className="text-4xl md:text-6xl font-semibold Darker mx-auto">A estrela que rouba a cena.</h1>
                <p className="text-gray-200">Com seu design arrojado e o potente motor V8 biturbo, o desempenho do Audi RS 7 nunca deixa de fascinar e emocionar.</p>
                <div className="flex flex-col md:flex-row gap-5 mb-20">
                    <button className="bg-[#657182] hover:bg-[#191e26] border border-gray-600 duration-300 px-10 py-3 rounded-full text-md cursor-pointer">Pesquisar inventário</button>
                    <button className="bg-[#191e26] hover:bg-[#3b3e42bf] border border-gray-700 duration-300 px-10 py-3 rounded-full text-md cursor-pointer">Veja as ofertas</button>
                </div>
            </div>
            <Motors />
        </div>
    )
}
export default Description
