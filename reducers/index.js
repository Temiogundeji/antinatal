import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { appointmentReducer } from './appointmentReducer';
import { messageReducer } from './messageReducer';
import { videoReducer } from './videoReducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    appointmentReducer: appointmentReducer,
    messageReducer: messageReducer,
    videoReducer: videoReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);