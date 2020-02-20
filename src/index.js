import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './App.css';
import {setTranslations, setLocale} from 'react-i18nify';

setTranslations({
    en: {
        application: {
            lil: 'Lilit',
            gev: 'George'
        },
    },

    arm: {
        application: {
            lil: 'Լիլիթ',
            gev: 'Գևորգ'
        },
    }
});

setLocale('arm');

ReactDOM.render(<App/>, document.getElementById('root'));

