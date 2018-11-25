import React, { PureComponent } from 'react';  
import { Radio } from 'antd';
import { Icon } from 'antd';

const RadioGroup = Radio.Group;



class Rater extends PureComponent {

	state = {
		value: undefined,
	}

	//grade data radio onChange event
	onChange = (e) => { 
		//set state
		this.setState({
			value: e.target.value,
		});

		//set question rate
		this.props.setRate(this.props.question, e.target.value);
	}


	render() {  
		//grade data
		const { gradeData } = this.props;  

		return (
			<div> 
				<RadioGroup onChange={this.onChange} value={this.state.value}>
					{
						
						/* grade data iteration*/
						gradeData.map((item, i ) => {
							return <Radio key={i} value={item}>{item}</Radio>
						})
					}
				</RadioGroup>
			</div>
		);
	}
}

export default Rater;
