import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css';
import './index.css';
import './styles/material/colors.css';
import './styles/odu/odu.css';
import './styles/odu/colors.css';
import './styles/utils.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));