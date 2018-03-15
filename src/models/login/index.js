import request from '../../utils/request';
import qs from 'qs';
export default{
	namespace:'login',
  state:{
    data:{}
  },
	reducers:{
     updateState(state, { payload }){
       if (!payload || typeof payload !== 'object' || Object.keys(payload).length === 0) return state;
       return Object.assign({}, state, payload);
     }
	},
	effects:{
      *fetchData({payload:{query,backup}},{call,put}){
        const data=yield call(request,
          {
            url:`/user/register`,
            options:{
              method:'POST',
              body:JSON.stringify(query)
            }
          })
        if(typeof backup === 'function'){
          backup(data)
        }
        if(data){
          yield put({
          type: 'updateState',
          payload: {
            data: data
          }
        });
        }
      },
	},
  //监听数据
  subscriptions: {
    setup({ dispatch, history }) {  
    },
  },


}
