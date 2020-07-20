import React from 'react';
import Messi from '../images/messi.jpg';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const styleHelp = {
    display : 'inline-block',
    height : '35%',
    width : '35%',
    padding : '0px 10px 0px 0px'
  }

  const {t, i18n} = useTranslation;

  function handleClick(lang) {
    i18n.changelanguage(lang);
  }

  return (
    <div className="container">
      <br />
      <h1>About Us</h1>
      <center></center>

      <br />
      <img src={Messi} alt="Lionel Messi" align="left" style={styleHelp}/ >
      <h3>1. Who we are</h3>
      <pre>We are an FC Barcelona fan club based in Ottawa, Canada.</pre>
      <br />
      <h3>2. What we offer</h3>
      <pre>Along with consistently updated FC Barcelona news, you can come and</pre>
      <pre>join us at our pub to watch matchdays with fellow Culers!</pre>
      <br />
      <h3>3. Where to find us</h3>
      <pre>You can find us on <a href="https://www.google.com/search?safe=active&tbm=lcl&sxsrf=ALeKk02wJ8Ko7I-wzZK3ijNdNrZImS1JFQ%3A1595004014129&ei=btQRX8i0B4WvytMPtNyW4Ac&q=202+sparks+street&oq=202+sparks+street&gs_l=psy-ab.3..0j0i20i263k1j38.8007.10236.0.10375.17.15.0.0.0.0.228.1800.0j10j1.11.0....0...1c.1.64.psy-ab..6.11.1784...0i273k1j0i433k1j0i433i131k1j0i67k1j0i433i67k1j0i433i131i67k1j0i22i30k1.0.zGCNhnnflvU#rlfi=hd:;si:9629715280421800154;mv:[[45.42143367731904,-75.70054738146429],[45.42107372268097,-75.70106021853572]]">202 Sparks Street</a> to be immersed in matches with passionate fans.</pre>
      <br />
      <h3>4. How to contact us</h3>
      <pre>Phone Number: (613) 123-4567</pre>
      <pre>Email: culers-ott@fcb.ca</pre>
      <pre>Instagram: @culers_ott</pre>
      <br />
    </div>
  )
}

export default AboutUs
