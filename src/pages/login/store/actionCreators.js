import axios from 'axios';
import * as constants from './constants';

const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        const result = res.data.data;
        if(result) {
          dispatch(changeLogin(result))
        } else {
          alert('登录失败')
        }
      })
  }
}

export const logout = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false
})