import * as React from 'react';
import { Route } from 'react-router-dom';
import GlossaryPage from "../glossary/GlossaryPage";
import Footer from "./Footer/Footer"

import './App.css';

const App = () => (
  <section>
    <main>
      <Route path="/:term?" component={GlossaryPage}/>
    </main>
    <Footer/>
  </section>
);

export default App;
