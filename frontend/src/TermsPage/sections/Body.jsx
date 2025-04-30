import React from 'react'
import GreenButton from '../components/GreenButton'
import Terms from '../components/Terms'
import { useTranslation } from '../../i18n/TranslationProvider'

const Body = () => {
  const { t } = useTranslation()

  return (
    <div className='flex min-h-[calc(100vh-8rem)] flex-col items-center'>
      <h1 className='text-3xl text-white font-bold tracking-wide'>{t("terms")}</h1>
      <GreenButton text={t("button.cancel")} />
      <Terms />
      <GreenButton text={t("button.cancel")} />
      <div className='h-8'></div>
    </div>
  )
}

export default Body