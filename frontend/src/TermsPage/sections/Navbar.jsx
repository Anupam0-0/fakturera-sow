import {useState } from 'react'
import { Menu } from 'lucide-react'
import Dropdown from '../components/Dropdown'
import MobileNavbar from '../components/MobileNavbar'
import { useTranslation } from '../../i18n/TranslationProvider'

const DiamondLogo = 'https://storage.123fakturera.se/public/icons/diamond.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation();

  return (
    <nav className='w-full max-w-[75dvw] mx-auto h-[8rem] flex justify-between items-center text-white  relative'>
      <div className='flex items-center gap-4 relative '>
        <img src={DiamondLogo} alt="logo" className='w-15 object-cover hidden xl:block' />
        <button onClick={() => setIsOpen(!isOpen)} className='block xl:hidden cursor-pointer p-3'><Menu color='white' size={32} strokeWidth={2.2} /></button>
        <div className={`absolute inset-0 left-2 w-20 ${isOpen ? "h-full top-20 " : "h-0 hidden top-20 -z-50"} transition-all ease-in-out duration-2000 `}>
          <MobileNavbar/>
        </div>
      </div>
      <div className='text-[1.1rem] lg:gap-10 xl:gap-[3.15rem] font-medium hidden xl:flex '>
        <a href='/' className=''>{t("nav.home")}</a>
        <a href='/order' className=''>{t("nav.order")}</a>
        <a href='/our-customers' className=''>{t("nav.ourcus")}</a>
        <a href='/aboutus' className=''>{t("nav.aboutus")}</a>
        <a href='/contactus' className=''>{t("nav.contactus")}</a>
        <Dropdown />
      </div>
      <div className='block xl:hidden'>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Navbar