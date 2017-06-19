import { createStore } from 'redux';
import getFilterValue from './reducers';

export let store = createStore(getFilterValue);