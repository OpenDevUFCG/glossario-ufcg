import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlossaryPage from "../glossary/GlossaryPage";
import Footer from "./Footer/Footer"

import './App.css';
import TermPage from '../term/TermPage';

const App = () => (
    <div className={"main"}>
        <Switch className={"main__route"}>
            <Route path="/" exact component={GlossaryPage}/>
            <Route path="/:term" component={TermPage}/>
        </Switch>
        <Footer className={"main__footer"}/>
    </div>
);

export default App;
