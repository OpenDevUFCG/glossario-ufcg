import * as React from 'react';
import { Route } from 'react-router-dom';
import Glossary from "../Glossary/Glossary";
import GlossaryFooter from "../Footer/GlossaryFooter"

import './App.css';

const App = () => (
    <div className={"main"}>
        <Route className={"main__route"} path="/:acronym?/:meaningId?" component={Glossary}/>
        <GlossaryFooter className={"main__footer"}/>
    </div>
);

export default App;
