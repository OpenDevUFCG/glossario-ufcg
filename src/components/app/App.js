import * as React from 'react';
import { Route } from 'react-router-dom';
import GlossaryPage from '../glossary/GlossaryPage';
import Footer from './Footer/Footer';

import styles from './App.module.css';

const App = () => (
  <div className={styles.main}>
    <main>
      <Route path="/:term?" component={GlossaryPage} />
    </main>
    <Footer />
  </div>
);

export default App;
