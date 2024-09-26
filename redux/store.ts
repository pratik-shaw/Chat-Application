import { createStore } from 'redux';
import rootReducer from './reducers'; // Ensure you have a rootReducer defined

const store = createStore(rootReducer);

export default store;