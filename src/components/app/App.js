import * as React from 'react';
import { Route } from 'react-router-dom';
import GlossaryPage from "../glossary/GlossaryPage";
import Footer from "./Footer/Footer"

import './App.css';

const App = () => (
    <div className={"main"}>
        <Route path="/:term?" component={GlossaryPage}/>
        <Footer className={"main__footer"}/>
    </div>
);

export default App;
