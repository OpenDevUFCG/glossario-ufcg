import React from 'react';

import { IconWithText } from '../../common';
import './Footer.css';

const contributionLink =
  'https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md';
const aboutLink = 'https://opendevufcg.org/';
const linkClass = 'pointer-hover no-decoration lighter-hover';

const Footer = () => (
  <footer className="glossary-footer">
    <a className={linkClass} href={contributionLink}>
      <IconWithText icon="inbox" text="Como contribuir?" />
    </a>
    <a className={linkClass} href={aboutLink}>
      <IconWithText icon="people" text="Quem somos?" />
    </a>
  </footer>
);

export default Footer;
