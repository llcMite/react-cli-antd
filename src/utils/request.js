import fetch from 'dva/fetch';
import {urlfix,getHost} from '../utils/common';

let obj={
  headers:{
    'Content-Type': 'application/json'
  },
  mode: 'no-cors',
  cache: 'default',
  credentials: 'same-origin',
  //credentials: 'include',
}

export default async function request({ url, options = {}, onError }) {
  if(url.indexOf(urlfix)===-1){
    url=`${urlfix}${url}`;
  }
  console.log(getHost)
  const temp = Object.assign({}, options);
  Object.assign(options, temp);
  let data = {};
  try {
    const res = await fetch(url, options);
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      data = await res.json();
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.error(error);
  }
  // 错误检测
  if (data.errmsg || data.errcode) {
    if (typeof onError === 'function') {
      onError(data);
    } else {
    }
    if (data.errstack) {
      console.error(`${URL_ERROR}${data.errstack}`);
    }
  }
  return data;
}

