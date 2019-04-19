import React from 'react';
import "./Footer.css"

import { IconWithText } from "../../common/index"

const contributionLink = "https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md";
const aboutLink = "https://opendevufcg.org/";

const Footer = () => (
    <div className={'glossary-footer'}>
        <a className={"pointer-hover no-decoration lighter-hover"} href={contributionLink}>
            <IconWithText icon={"inbox"} text={"Como contribuir?"}/>
        </a>
        <a className={"pointer-hover no-decoration lighter-hover"} href={aboutLink}>
            <IconWithText icon={"people"} text={"Quem somos?"}/>
        </a>
    </div>
);


export default Footer;