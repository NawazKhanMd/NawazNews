const key = '';
export const restApiUrls = {}

const axios = require('axios');
const baseURL = '';
const accessToken = localStorage.getItem('t0kEn');
const request = method => options => (dispatch, getState) => {
  return axios({
    baseURL,
    ...options,
    headers: {
      Authorization: accessToken,
      ...options.headers
    },
    method,
    proxy: false
  }).catch(error => {
    if (error.message.indexOf('status code 401') != -1) {
      //window.location.reload()
    }
    //requestErrorHandler(error, options, dispatch);
  });
};
export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const patch = request('PATCH');
export const remove = request('DELETE');
