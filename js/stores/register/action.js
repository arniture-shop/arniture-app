import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET
} from './action.types'
import axios from 'axios'

const endPoint = 'http://ec2-34-237-243-5.compute-1.amazonaws.com/users/signup'

export const register = (email, password) => {
  return dispatch => {
    axios.post('http://ec2-34-237-243-5.compute-1.amazonaws.com/users/signup', {
      email: email,
      password: password,
      role: 'user'
    })
    .then(function (response) {
        dispatch(registerSuccess())
      })
      .catch(function (err) {
        dispatch(registerFail(err.response.data.message))
      })
  }
}

export const registerFail = (err) => ({
  type: REGISTER_FAIL,
  payload: err
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
})

export const resetRegisterState = () => {
  return dispatch => {
    dispatch(reset())
  }
}

export const reset = () => ({
  type: RESET
})
