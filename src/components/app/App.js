import * as React from 'react';
import { Route } from 'react-router-dom';
import GlossaryPage from "../glossary/GlossaryPage";
import Footer from "./Footer/Footer"

import './App.css';

const App = () => (
  <article className="main">
    <main>
      <Route path="/:term?" component={GlossaryPage}/>
    </main>
    <Footer/>
  </article>
);

export default App;
