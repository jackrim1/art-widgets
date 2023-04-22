import "./main.scss";

import React, {createElement} from 'react';
import { createRoot } from 'react-dom/client';

// Importing the fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
library.add(faTableCells)
import App from '@/components/views/home';

const domContainer = document.querySelector('#home');
const home = createRoot(domContainer);
home.render(createElement(App));
