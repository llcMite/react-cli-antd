import React,{Component} from 'react';
import { connect } from 'dva';
import {Checkbox,message} from 'antd';
import styles from './index.less';
const key='login'
class Login extends Component{
  constructor(props){
      super(props)
      this.state={
      }
  }
  
  
 

  componentWillMount(){
  	this.props.dispatch({
  		type:`${key}/fetchData`,
  		payload:{
  			query:{
  			},
  			backup:(data)=>{

  			}
  		}
  	})
  }

  render(){
  	const {}=this.state;
  	 return (
		    <div className={styles.wrap}>
		     登入页
		    </div>
		  );
  	}
  

}

export default connect((state)=>{return state[key]})(Login);
