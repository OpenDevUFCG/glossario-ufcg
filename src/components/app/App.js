import * as React from 'react';
import { Route } from 'react-router-dom';
import Glossary from "../Glossary/Glossary";

import './App.css';

const App = () => (
    <div className={"main"}>
        <div className={"content"}>
            <Route path="/:acronym?/:meaningId?" component={Glossary}/>
        </div>
        <div className={"footer"}>
            Como contribuir?
        </div>
    </div>
);

export default App;
