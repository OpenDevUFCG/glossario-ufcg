import React from 'react';
import "./GlossaryFooter.css"

import IconWithText from "../IconWithText/IconWithText"

const contributionLink = "https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md";
const aboutLink = "https://opendevufcg.org/";

const GlossaryFooter = (props) => (
    <div className={'glossary-footer'}>
        <a className={"pointer-hover no-decoration"} href={contributionLink}>
            <IconWithText icon={"inbox"} text={"Como contribuir?"}/>
        </a>
        <a className={"pointer-hover no-decoration"} href={aboutLink}>
            <IconWithText icon={"people"} text={"Quem somos?"}/>
        </a>
    </div>
);


export default GlossaryFooter;