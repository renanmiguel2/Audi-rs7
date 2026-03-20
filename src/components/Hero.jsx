import imgHero from '../img/imgHome/rs7Home.avif'
import imgResponsive from '../img/imgHome/rs7-responsive.jpeg'
function Hero() {
    return (
        <div className='relative'>
            <div>
                <img src={imgResponsive} className='md:hidden w-full h-screen object-cover object-center z-0' alt="RS7 Responsive" />
                <img src={imgHero} className='hidden md:block w-full h-screen object-cover object-center z-0' alt="RS7 Hero" />
            </div>
            <div className='absolute top-30 left-0 md:left-8 z-10 md:left-25 text-white px-5 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-medium Darker mb-4'>Desempenho do RS 7 2026</h1>
                <div className='Darker text-2xl md:text-3xl font-medium'>
                    <p>Preço inicial sugerido pelo fabricante: US$ 130.700. </p>
                    <p>Veja as principais informações.</p>
                        <div className='flex gap-4 flex-col sm:flex-row mt-6'>
                            <button className='bg-[#657182] hover:bg-[#4b4e53] duration-200 text-white py-3 px-5 rounded-full text-xl cursor-pointer'>Contruir e precificar</button>
                            <button className='bg-[#191e26] hover:bg-[#2d3540] duration-300 text-white py-3 px-5 rounded-full text-xl cursor-pointer'>Pesquisar inventário</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero