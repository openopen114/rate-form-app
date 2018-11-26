import React, { PureComponent } from 'react';  
import { Select, Input, Icon } from 'antd'; 

import './HeaderInfo.scss';

const Option = Select.Option;

class HeaderInfo extends PureComponent {
	constructor(props){
		super(props);

		this.state = {
			classNameSelected:'',
			userName:''
		}
	}  



 

	// set header information data to RateForm Comp as did update
	componentDidUpdate(){ 
		this.props.setHeaderInfoData(this.state);
	}	 

 	

	render() { 
		return ( 
			<div className='headerInfoContainer card1'>  
				{/* Class Selector Area */}
				<div style={{display:'inline-flex', alignItems:'center', flexWrap:'nowrap', width:'100%'}}>
					
					{/* title */} 
					<div style={{width:'90px'}}>
						日期/課程: 
					</div>

					
					{/* class selector */}
					<Select style={{width:'100%'}} 
							onChange={val => this.setState({'classNameSelected':val})}>
						{ 
							this.props.classData.map((item, i) => {
								return <Option key={i} value={item}>{item}</Option>
							})
						} 
					</Select> 

					{/* empty waring icon */}
					{this.state.classNameSelected === '' && <Icon type="info-circle" style={{color:'#FF0000',marginLeft:'8px'}}/>}


				</div>


				{/* user name input area */}
				<div style={{display:'inline-flex', alignItems:'center', flexWrap:'nowrap', width:'100%', marginTop:'8px'}}>
					
					{/* title */}
					<div style={{width:'90px'}}>
						填寫人: 
					</div>
					
					{/* input */}
					<Input placeholder="User Name"  onChange={e => this.setState({'userName':e.target.value})} />

					{/* empty waring icon*/}
					{this.state.userName === '' && <Icon type="info-circle" style={{color:'#FF0000',marginLeft:'8px'}}/>}
				</div>
			</div>
		);
	}
}

export default HeaderInfo;
