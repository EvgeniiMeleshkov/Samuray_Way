import {store} from './redux/redux_store'
import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render';



store.subscribe(rerenderEntireTree)
rerenderEntireTree()