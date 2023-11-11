import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import AuthReducer from '../features/authentication/slices/authSlice';
import UserReducer from '../features/user/slices/userSlice';

import { userApi } from '../features/user/services/userService';

import { locationApi } from '../features/location/services/localizacoesService';
import locationReducer from '../features/location/slices/localizacoesSlice';

import drawerModal from '../features/common/drawer/slice'
import { veiculoApi } from '../features/veiculo/services/veiculoService';
import veiculoReducer from '../features/veiculo/slices/veiculoSlice';
import { atmApi } from '../features/atms/services/service';
import atmReducer from '../features/atms/slices/slice'
import modalSlice from '../features/common/modal/slice'
import numericSlice from '../features/common/categoria/slice'
import placeSlice from '../features/places/slices/slice'
import alertSlice from '../features/common/alert/slice'
import { placesApi } from '../features/places/services/service';
import {persistStore,persistReducer} from 'redux-persist';
import arraySlice from '../features/common/atmsAll/slice'
import currentLocationSlice from '../features/common/location/slice'
import adsReducer from '../features/ads/slices/adsSlice'
import { adsApi } from '../features/ads/services/adsService';
import { notificationApi } from '../features/notification/service';
import notificationReducer from '../features/notification/slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['auth']
};
const appReducer=combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    location: locationReducer,
    veiculo: veiculoReducer,
    drawer:drawerModal,
    atms:atmReducer,
    modal:modalSlice, 
    numeric:numericSlice,
    places:placeSlice,

    alert:alertSlice,
    atmAll:arraySlice,
    ads:adsReducer,
    notification:notificationReducer,
    currentLocation:currentLocationSlice,
  
    [userApi.reducerPath]: userApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [veiculoApi.reducerPath]: veiculoApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [atmApi.reducerPath]: atmApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer
})
const rootReducer = (state, action) => {
  // create a new state with only auth
  // keep auth state
  if (action.type === 'RESET_STATE') {
    console.log('rsetando state');
   // const {auth} = state; 
    state =  {} //{auth}; 
  }
  if (action.type ==='SIGNOUT_REQUEST') {
 
      // AsyncStorage.removeItem('root');
  
    return appReducer(undefined, action);
}
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
  serializableCheck: false,
    /* serializableCheck: {
      ignoredPaths: ['auth'],
    }, */
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    
    },
  }).concat(
      userApi.middleware,
      locationApi.middleware,
      atmApi.middleware,
      veiculoApi.middleware,  
      placesApi.middleware,
      adsApi.middleware,
      notificationApi.middleware
    
    ),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);
export {store, persistor};



/* That one call to configureStore did all the work for us:

It combined todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}
It created a Redux store using that root reducer
It automatically added the thunk middleware
It automatically added more middleware to check for common mistakes like accidentally mutating the state
It automatically set up the Redux DevTools Extension connection

*/
