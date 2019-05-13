import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

import flagEn from 'twemoji/2/svg/1f1ec-1f1e7.svg';
import flagFr from 'twemoji/2/svg/1f1eb-1f1f7.svg';
import flagPl from 'twemoji/2/svg/1f1f5-1f1f1.svg';
import flagCz from 'twemoji/2/svg/1f1e8-1f1ff.svg';
import flagEs from 'twemoji/2/svg/1f1ea-1f1f8.svg';
import flagJa from 'twemoji/2/svg/1f1ef-1f1f5.svg';
import flagKo from 'twemoji/2/svg/1f1f0-1f1f7.svg';
import flagDe from 'twemoji/2/svg/1f1e9-1f1ea.svg';
import flagBr from 'twemoji/2/svg/1f1e7-1f1f7.svg';
import flagCn from 'twemoji/2/svg/1f1e8-1f1f3.svg';
import flagTw from 'twemoji/2/svg/1f1f9-1f1fc.svg';
import flagRu from 'twemoji/2/svg/1f1f7-1f1fa.svg';
import flagIt from 'twemoji/2/svg/1f1ee-1f1f9.svg';
import flagAr from 'twemoji/2/svg/1f1e6-1f1ea.svg';
import flagTr from 'twemoji/2/svg/1f1f9-1f1f7.svg';
import flagNL from 'twemoji/2/svg/1f1f3-1f1f1.svg';
import flagWls from 'twemoji/2/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg';
import flagAl from 'twemoji/2/svg/1f1e6-1f1f1.svg';

const options = [
  { value: 'en', label: <span><img src={flagEn} className='emoji' alt='' /> English</span> },
  { value: 'ar', label: <span><img src={flagAr} className='emoji' alt='' /> العربية</span> },
  { value: 'cs', label: <span><img src={flagCz} className='emoji' alt='' /> Čeština</span> },
  { value: 'cy', label: <span><img src={flagWls} className='emoji' alt='' /> Cymraeg</span> },
  { value: 'de', label: <span><img src={flagDe} className='emoji' alt='' /> Deutsch</span> },
  { value: 'es', label: <span><img src={flagEs} className='emoji' alt='' /> Español</span> },
  { value: 'fr', label: <span><img src={flagFr} className='emoji' alt='' /> Français</span> },
  { value: 'it', label: <span><img src={flagIt} className='emoji' alt='' /> Italiano</span> },
  { value: 'ja', label: <span><img src={flagJa} className='emoji' alt='' /> 日本語</span> },
  { value: 'ko', label: <span><img src={flagKo} className='emoji' alt='' /> 한국어</span> },
  { value: 'nl-NL', label: <span><img src={flagNL} className='emoji' alt='' /> Nederlands</span> },
  { value: 'pl', label: <span><img src={flagPl} className='emoji' alt='' /> Polski</span> },
  { value: 'pt-BR', label: <span><img src={flagBr} className='emoji' alt='' /> Português do Brasil</span> },
  { value: 'ru', label: <span><img src={flagRu} className='emoji' alt='' /> Русский</span> },
  { value: 'sq', label: <span><img src={flagAl} className='emoji' alt='' /> Shqip</span> },
  { value: 'tr', label: <span><img src={flagTr} className='emoji' alt='' /> Türkçe</span> },
  { value: 'zh', label: <span><img src={flagCn} className='emoji' alt='' /> 简体中文</span> },
  { value: 'zh-TW', label: <span><img src={flagTw} className='emoji' alt='' /> 繁體中文（臺灣）</span> },
];

const LanguageSelect = ({ value, onChange }) => (
  <Dropdown
    options={options}
    value={value}
    label='文A'
    onChange={onChange}
  />
);

LanguageSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageSelect;
