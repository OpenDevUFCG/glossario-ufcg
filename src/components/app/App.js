import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Glossary from "../Glossary/Glossary";
import GlossaryFooter from "../Footer/GlossaryFooter"

import './App.css';
import ResultsPage from '../ResultsPage/ResultsPage';

const App = () => (
    <div className={"main"}>
        <Switch className={"main__route"}>
            <Route path="/" exact component={Glossary}/>
            <Route path="/:acronym" component={ResultsPage}/>
        </Switch>
        <GlossaryFooter className={"main__footer"}/>
    </div>
);

export default App;
