import logo from '../../img/imgLogo/logo.png'
import location from '../../img/icons/location-svg.svg'
import user from '../../img/icons/user-svg.svg'
function Header() {
    return (
        <div className='absolute top-0 left-0 w-full z-10 shadow-custom min-w-full'>
            <header className=' flex justify-center sm:justify-between bg-[#020203] text-white py-3 px-25'>
                <div className='flex items-center gap-6 text-gray-400 text-sm'>
                    <div>
                        <img src={logo} className='w-19' alt="RS7 Logo" />
                    </div>
                    <div className='hidden lg:flex gap-6'>
                        <p className='hover:text-white cursor-pointer duration-100'>Modelos</p>
                        <p className='hover:text-white cursor-pointer duration-100'>Encontre e compre</p>
                        <p className='hover:text-white cursor-pointer duration-100'>Proprietários</p>
                    </div>
                </div>
                <nav className='flex items-center gap-6'>
                    <div className='hidden lg:flex gap-2 hover:bg-[#2d3540]   px-8 py-4 rounded-full cursor-pointer duration-100'>
                        <img src={location} className='max-w-6' alt="Location Icon" />
                        <p className=' flex items-center text-xs'>Selecione o revendedor</p>
                    </div>
                        <div className='hidden sm:flex p-4 hover:bg-[#2d3540] rounded-full cursor-pointer'>
                            <img src={user} className='max-w-6' alt="User Icon" />
                        </div>

                </nav>

            </header>
        </div>
    )
}
export default Header
