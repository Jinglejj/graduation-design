import request from "./request";
const USER_API = process.env.VUE_APP_USER_API;
import md5 from 'js-md5'
//data{username,password}
export function login(data) {
  data.password=md5(data.password)
  return request({
    url: `${USER_API}/login`,
    method: 'post',
    data
  })
}

export function register(data) {
  data.password=md5(data.password)
  return request({
    url: `${USER_API}/register`,
    method: 'post',
    data
  })
}
export function verifyCode(data) {
  return request({
    url: `${USER_API}/code?email=${data}`,
    method: 'get',
  })
}
export function verifyEmail(email,code) {
   return request({
    url: `${USER_API}/verifyEmail?email=${email}&code=${code}`,
    method: 'get'
  })
}
