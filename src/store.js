import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'user' ]
};
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);

export default {
	store,
	persistor
};

export { store, persistor };
