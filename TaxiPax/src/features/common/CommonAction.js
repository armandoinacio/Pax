import {CommonConstants} from './CommonConstant';

export const AuthAction = {
  setModalVisible,
  setMostrarVisible,
};

function setModalVisible(data) {
  return dispatch => {
    dispatch({type: CommonConstants.MODAL_VISIBLE, data: data});
    return data;
  };
}

function setMostrarVisible(data) {
  return dispatch => {
    dispatch({type: CommonConstants.MOSTRAR_LOGIN, data: data});
    return data;
  };
}
