import { createStore } from 'redux';
import filter from './reducers';

export let store = createStore(filter);