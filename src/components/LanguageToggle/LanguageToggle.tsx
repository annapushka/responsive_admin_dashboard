// @flow 
import * as React from 'react';
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

import './LanguageToggle.scss';
import { useStaticRendering } from 'mobx-react-lite';


const lngs = ['en', 'ru'];

type Props = {

};
export const LanguageToggle = (props: Props) => {

    const handleCHangeLanguage = (e: any) => {
        i18next.changeLanguage(e.target.value === lngs[0] ? lngs[1] : lngs[0])
    }


    return (
        <button
            type="submit"
            onClick={handleCHangeLanguage}
            className='langToggleBtn'
            value={i18next.resolvedLanguage}
        >
            {i18next.resolvedLanguage}
        </button>
    );
};