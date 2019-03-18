import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers/rootReducer';

// export default function configureStore(initialState = {}) {
// 	const persistConfig = {
// 		key: 'root',
// 		storage
// 	};

// 	const persistedReducer = persistReducer(persistConfig, rootReducer);

// 	const store = createStore(
// 		persistedReducer,
// 		initialState,
// 		composeWithDevTools(applyMiddleware(thunk))
// 		// other store enhancers if any
// 	);

// 	persistStore = persistStore(store);

// 	return { store, persistStore };
// }

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'user' ]
};
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
	// other store enhancers if any
);
let persistor = persistStore(store);

export default {
	store,
	persistor
};

export { store, persistor };
