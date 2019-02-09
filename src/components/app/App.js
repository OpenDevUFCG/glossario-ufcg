import * as React from 'react';
import { Route } from 'react-router-dom';
import Glossary from "../Glossary/Glossary";

import './App.css';

const App = () => (
    <div>
        <Route path="/:acronym?" component={Glossary}/>
    </div>
);

export default App;
