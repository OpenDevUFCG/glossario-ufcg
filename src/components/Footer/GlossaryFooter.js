import React from 'react';
import "./GlossaryFooter.css"

import IconWithText from "../IconWithText/IconWithText"

const GlossaryFooter = (props) => (
    <div className={'glossary-footer'}>
        <IconWithText icon={"inbox"} text={"Como contribuir?"}/>
        <IconWithText icon={"people"} text={"Quem somos?"}/>
    </div>
);


export default GlossaryFooter;