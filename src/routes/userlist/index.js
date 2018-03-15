import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Index extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentWillMount(){

  }

  render(){
  	return (<div style={{background:'red'}}>列表页</div>)
  }
}

export default connect()(Index);

