import { useState } from 'react';
import { useTranslation } from '../../i18n/TranslationProvider'


const options = [
    { value: 'sv', label: 'Svenska', flag: 'https://storage.123fakturere.no/public/flags/SE.png' },
    { value: 'en', label: 'English', flag: 'https://storage.123fakturere.no/public/flags/GB.png' },
];


const Dropdown = () => {

    const { lang, setLang } = useTranslation();
    const [selected, setSelected] = useState(options.find(opt => opt.value === lang) || options[0]);
    const [open, setOpen] = useState(false);

    const handleLanguageChange = (opt) => {
        setSelected(opt);
        setLang(opt.value); // Update the language in the translation context
        setOpen(false);
    };


    return (
        <div>
            <div className="relative w-36">
                <div
                    className="flex items-center justify-end px-4 rounded bg-transparent cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <div className="flex items-center gap-4">
                        <span className='text-base font-medium tracking-wide lg:text-xl' >{selected.label}</span>
                        <img src={selected.flag} className="w-8" alt={`${selected.label} flag`} />

                    </div>
                </div>

                {open && (
                    <div className="absolute mt-3 ml-2 py-1 bg-white text-black rounded-xl shadow-xl/30 z-10 mx-auto w-[90%]">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => handleLanguageChange(opt)}
                                className="flex justify-between items-center gap-2 px-4 py-2.5 hover:bg-neutral-100 cursor-pointer"
                            >
                                <span className='font-normal text-md' >{opt.label}</span>
                                <img src={opt.flag} className="w-7" alt={`${opt.label} flag`} />

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;