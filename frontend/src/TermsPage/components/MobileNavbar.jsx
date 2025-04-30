import React from 'react'
import { useTranslation } from '../../i18n/TranslationProvider'

const MobileNavbar = () => {
    const { t } = useTranslation()

    const navLinks = [
        { href: '/', label: t("nav.home") },
        { href: '/order', label: t("nav.order") },
        { href: '/our-customers', label: t("nav.ourcus") },
        { href: '/aboutus', label: t("nav.aboutus") },
        { href: '/contactus', label: t("nav.contactus") },
    ]

    return (
        <div className='font-medium text-[1.1rem] text-black/90 min-w-[20rem] h-full'>
            <div className='flex flex-col shadow-xl'>
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className='py-5 px-9 bg-white  hover:bg-blue-300'>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MobileNavbar