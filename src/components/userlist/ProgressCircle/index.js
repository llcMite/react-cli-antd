import react,{Component} from 'react';
import styles from './index.css'

class Circle extends Component{
   constructor(props){
       super(props)
   }


   render(){
   	// const {width,}
   	return (<svg xmlns="http://www.w3.org/200/svg" height="150" width="110">
				    <circle 
				      cx="55" 
				      cy="55" 
				      r="50" 
				      fill="none" 
				      stroke="grey" 
				      strokeWidth="5" 
				      strokeLinecap="round"
				     />
				    <circle 
				      className={styles["demo2"]} 
				      id="J_demo2" 
				      cx="55" 
				      cy="55" 
				      r="50" 
				      fill="none" 
				      stroke="red" 
				      strokeWidth="5" 
				      strokeDasharray="0,10000"
				    />
				</svg>)
   }
}

export default Circle

