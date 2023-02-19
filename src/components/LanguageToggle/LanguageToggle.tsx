// @flow 
import React, { useEffect, useState } from 'react';
import i18next from "i18next";

import './LanguageToggle.scss';

const lngs = {
    en: "en",
    ru: "ru",
};

type Props = {

};
export const LanguageToggle = (props: Props) => {

    const [lang, setLang] = useState(lngs.en)

    const handleCHangeLanguage = () => {
        setLang(prev => prev === lngs.en ? lngs.ru : lngs.en)
    }

    useEffect(() => {
        i18next.changeLanguage(lang)
    }, [lang])


    return (
        <button
            type="submit"
            onClick={handleCHangeLanguage}
            className='langToggleBtn'
            value={lang}
        >
            {lang}
        </button>
    );
};