import { useState, useEffect } from "react"
import logo from '../../img/imgLogo/logo.png'
import location from '../../img/icons/location-svg.svg'
import user from '../../img/icons/user-svg.svg'

function Header() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [open])

    return (
        <div className='absolute top-0 left-0 w-full z-60 md:z-10 min-w-full'>
            <header className='flex justify-between bg-[#020203] text-white py-3 px-6 lg:px-20'>
                <div className='flex items-center gap-6 text-gray-400 text-sm'>
                    <img src={logo} className='w-16' alt="RS7 Logo" />
                    <div className='hidden lg:flex gap-6'>
                        <p className='hover:text-white cursor-pointer duration-100'>Modelos</p>
                        <p className='hover:text-white cursor-pointer duration-100'>Encontre e compre</p>
                        <p className='hover:text-white cursor-pointer duration-100'>Proprietários</p>
                    </div>
                </div>

                <nav className='flex items-center gap-4'>
                    <div className='hidden lg:flex gap-2 hover:bg-[#2d3540] px-6 py-3 rounded-full cursor-pointer duration-100'>
                        <img src={location} className='w-5' alt="Location Icon" />
                        <p className='flex items-center text-xs'>Selecione o revendedor</p>
                    </div>

                    <div className='hidden sm:flex p-3 hover:bg-[#2d3540] rounded-full cursor-pointer'>
                        <img src={user} className='w-5' alt="User Icon" />
                    </div>

                    <button className='lg:hidden flex flex-col gap-1' onClick={() => setOpen(true)}>
                        <span className='w-6 h-[2px] bg-white'></span>
                        <span className='w-6 h-[2px] bg-white'></span>
                        <span className='w-6 h-[2px] bg-white'></span>
                    </button>
                </nav>
            </header>

            <div
                className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            ></div>

            <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#020203] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className='p-6'>
                    <button onClick={() => setOpen(false)} className="mb-10">
                        <div className="relative w-6 h-6">
                            <span className="absolute w-6 h-[2px] bg-white rotate-45 top-3"></span>
                            <span className="absolute w-6 h-[2px] bg-white -rotate-45 top-3"></span>
                        </div>
                    </button>

                    <nav className='flex flex-col gap-6 text-lg'>
                        <a href="#" onClick={() => setOpen(false)}>Modelos</a>
                        <a href="#" onClick={() => setOpen(false)}>Encontre e compre</a>
                        <a href="#" onClick={() => setOpen(false)}>Proprietários</a>
                        <a href="#" onClick={() => setOpen(false)}>Contato</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header