import React from 'react';

import SocilaLinks from '../../SocialLinks';

import { footerNavbar, socialLinks } from '../../../utils/constant';

const Copyright = () => (
    <div className="footer-copyright py-3 navbar navbar-expand-md navbar-light align-items-baseline">
      <span className="text-secondary">&copy; DayAxe, Inc.</span>
      <nav className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        {
          footerNavbar && footerNavbar.map((item, index) => (
            <li key={index} className="nav-item ml-5">
              <a href={item.to} className="nav-link text-secondary">{item.title}</a>
            </li>
          ))
        }
        </ul>
      </nav>

      <SocilaLinks socialLinks={socialLinks} />
    </div>
);

export default Copyright;
