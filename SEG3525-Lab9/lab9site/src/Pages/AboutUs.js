import React from 'react';
import Messi from '../images/messi.jpg';
import { ButtonGroup, Button } from 'react-bootstrap';

import i18next from '../i18next';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const styleHelp = {
    display : 'inline-block',
    height : '35%',
    width : '35%',
    padding : '0px 10px 0px 0px'
  }

  const {t, i18n} = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="container">
      <br />
      <ButtonGroup aria-label="Basic example">
        <Button variant="light" onClick={() => handleClick('en')}>EN</Button>
        <Button variant="light" onClick={() => handleClick('fr')}>FR</Button>
      </ButtonGroup>
      <h1>{t('Title.1')}</h1>
      <img src={Messi} alt="Lionel Messi" align="left" style={styleHelp}/ >
      <h3>{t('Subtitle.1')}</h3>
      <pre>{t('Text.1')}</pre>
      <br />
      <h3>{t('Subtitle.2')}</h3>
      <pre>{t('Text.2A')}</pre>
      <pre>{t('Text.2B')}</pre>
      <br />
      <h3>{t('Subtitle.3')}</h3>
      <pre>{t('Text.3')}</pre>
      <br />
      <h3>{t('Subtitle.4')}</h3>
      <pre>{t('Text.4A')}</pre>
      <pre>{t('Text.4B')}</pre>
      <pre>I{t('Text.4C')}</pre>
      <br />
    </div>
  )
}

export default AboutUs
