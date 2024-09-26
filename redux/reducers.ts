import { combineReducers } from 'redux';

// Initial state
const initialState = {
  user: null,
};

// User reducer
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Combine reducers if you have more
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;
