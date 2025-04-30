import React from 'react'
import { useTranslation } from '../../i18n/TranslationProvider'

const Terms = () => {
    const { t } = useTranslation()

    return (
        (t && t("terms.one") && 
            <div className='max-w-[55rem] bg-white text-md xl:text-[18px] text-black/70 my-4 sm:mx-4 p-10 xl:p-12 rounded-3xl text-center flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>
                    <b> {t("terms.zero")}</b> {' '}
                    {t("terms.one")}
                </div>
                <div>
                    {t("terms.two")}
                </div>
                <div>
                    {t("terms.three")}
                </div>
                <br />
                <div>
                    {t("terms.four")}
                </div>
                <div>
                    {t("terms.five")}
                </div>
                <br />
                <div>
                    {t("terms.six")}
                </div>
                <div>
                    {t("terms.seven")}
                </div>
                <div>
                    {t("terms.eight")}
                </div>
                <div>
                    {t("terms.nine")}
                </div>
                <div>
                    {t("terms.ten")}
                </div>
                <div>
                    {t("terms.eleven")}
                </div>
                <div>
                    {t("terms.twelve")}
                </div>
                <div>
                    {t("terms.thirteen")}
                </div>
                <div>
                    {t("terms.fourteen")}
                </div>
                <div>
                    {t("terms.fifteen")}
                </div>
                <div>
                    {t("terms.sixteen")}
                </div>
                <div>
                    {t("terms.seventeen")}
                </div>
                <div>
                    {t("terms.eighteen")}
                </div>
                <div>
                    {t("terms.nineteen")}
                </div>
                <div>
                    {t("terms.twenty")}
                </div>
                <div>
                    {t("terms.twentyone")} <a href='https://online.123fakturera.se/us/?height=1050&width=1680' target='_blank' className='text-blue-600 '>{t("terms.twentyone1")}</a><span>{t("terms.twentyone2")} </span>
                </div>
                <div>
                    {t("terms.twentytwo")}
                </div>
                <div>
                    {t("terms.twentythree")}
                </div>
                <div>
                    {t("terms.twentyfour")}
                </div>
                <div>
                    {t("terms.twentyfive")}
                </div>

            </div>)
    )
}

export default Terms