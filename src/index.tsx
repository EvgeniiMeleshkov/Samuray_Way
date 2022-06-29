import {store} from '../src/redux/state'
import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render';

store.subscriber(rerenderEntireTree)
rerenderEntireTree()