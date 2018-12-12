import React from 'react';

import Logo from '../Logo';
import Copyright from './Copyright';
import ListLinks from './ListLinks';

import { footerContent } from '../../utils/constant';

const Footer = () => (
  <footer className="footer">
    <div className="text-center text-md-left d-flex">
        <div className="col align-self-center">
          <Logo />
        </div>
        {
          footerContent.map((content, index, array) => (
            <ListLinks
              key={index}
              title={content.title}
              links={content.links}
              className={(array.length - 1 !== index) ? 'col' : ''}
            />
          ))
        }
    </div>

    <Copyright />

  </footer>
);

export default Footer;
