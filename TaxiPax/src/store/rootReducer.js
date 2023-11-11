import { combineReducers } from 'redux';
import AuthReducer from '../features/authentication/slices/authSlice';
import UserReducer from '../features/user/slices/userSlice';
import locationReducer from '../features/location/slices/localizacoesSlice';
import veiculoReducer from '../features/veiculo/slices/veiculoSlice';
import atmReducer from '../features/atms/slices/slice';
import modalSlice from '../features/common/modal/slice';
import numericSlice from '../features/common/categoria/slice';
import placeSlice from '../features/places/slices/slice';
import alertSlice from '../features/common/alert/slice';
import arraySlice from '../features/common/atmsAll/slice';
import { userApi } from '../features/user/services/userService';
import { locationApi } from '../features/location/services/localizacoesService';
import { veiculoApi } from '../features/veiculo/services/veiculoService';
import { atmApi } from '../features/atms/services/service';
import { placesApi } from '../features/places/services/service';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  location: locationReducer,
  veiculo: veiculoReducer,
  atms: atmReducer,
  modal: modalSlice,
  numeric: numericSlice,
  places: placeSlice,
  alert: alertSlice,
  atmAll: arraySlice,

  [userApi.reducerPath]: userApi.reducer,
  [locationApi.reducerPath]: locationApi.reducer,
  [veiculoApi.reducerPath]: veiculoApi.reducer,
  [atmApi.reducerPath]: atmApi.reducer,
  [placesApi.reducerPath]: placesApi.reducer,
});

export default rootReducer;
