import React from 'react';

const temp = " https://th.bing.com/th/id/OIP.ZsfSop2DinoSQh1Jy-sZMQHaDt?rs=1&pid=ImgDetMain"
const swedenFlag = "https://storage.123fakturere.no/public/flags/SE.png"
const englandFlag = "https://storage.123fakturere.no/public/flags/GB.png"

const languages = [
    {
        id: 1,
        language: "English",
        logo: swedenFlag
    },
    {
        id: 2,
        language: "Svenska",
        logo: englandFlag
    }
];

const Dropdown = () => {
    return (
        <div>
            <select name="language" id="language-select" className='outline-none '>
                {languages.map((lang) => (
                    <option key={lang.id} value={lang.language} className='bg-white text-black focus:bg-white'>
                        <div className='flex items-center gap-4 capitalize'>
                            <span className='capitalize text-xl'>{lang.language}</span>
                            {/* <img
                                src={lang.logo || temp}
                                alt={`${lang.language} logo`}
                                className='size-5 object-cover'
                            /> */}
                            <img src={temp} alt="" />
                        </div>
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;