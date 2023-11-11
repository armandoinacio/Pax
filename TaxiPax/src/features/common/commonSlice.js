import {CommonConstants} from './CommonConstant';

const initialState = {
  status: '',
  data: {
    ModalVisible: false,
    MostrarTelaLogin: false,
  },
  error: {},
};

export function CommonReducer(state = initialState, action) {
  switch (action.type) {
    case CommonConstants.MOSTRAR_LOGIN:
      return {
        ...state,
        status: CommonConstants.MOSTRAR_LOGIN,
        data: {...state.data, ...{ModalVisible: action.data}},
        error: {},
      };
    case CommonConstants.MODAL_VISIBLE:
      return {
        ...state,
        status: CommonConstants.MODAL_VISIBLE,
        data: {...state.data, ...{MostrarTelaLogin: action.data}},
        error: {},
      };
    default:
      return state;
  }
}
