import React, { PureComponent } from 'react';  
import Rater from './Rater';
import { Icon, Button, Divider, Tooltip } from 'antd'; 
import './QuestionBody.scss';



class QuestionBody extends PureComponent {
	constructor(props){
		super(props);
		this.state = {};


		this.setRate = this.setRate.bind(this);
		this.isRatedFinish = this.isRatedFinish.bind(this);
		this.onSubmit = this.onSubmit.bind(this); 
		this.getUnRatedCount = this.getUnRatedCount.bind(this); 
	}



	// set rate score to state
	setRate(_question, _val){ 
		const obj = {};
		obj[_question] = _val;

		this.setState(obj, () => {  
			this.getUnRatedCount();
		})
	}


	// is rated all question
	isRatedFinish(){
		let numOfQuestion = Object.keys(this.props.questionData).length;
		let numOfRated = Object.keys(this.state).length;
		let result = (numOfRated === numOfQuestion) ? true : false; 
		return result;
	}


	// get num of unRate question
	getUnRatedCount(){
		let numOfQuestion = Object.keys(this.props.questionData).length;
		let numOfRated = Object.keys(this.state).length;
		let result = numOfQuestion - numOfRated;

		return result;
	}


	//submit event
	onSubmit(){ 
		this.props.setRatedResult(this.state);
	}



	render() { 
		const isRatedFinish = this.isRatedFinish();
		let unRated = this.getUnRatedCount(); 
		
		return (
			<div className="questionBodyContainer card1">

				{/* title */}
				<div className="title">
					<h1>問卷調查表</h1>
					{ unRated && <span className="error">{unRated}</span> }項問題待填寫
					<Divider />
				</div>

				{
					/* question data iteration */
					this.props.questionData.map((item, i) => { 

						return (
							<div key={i} style={{marginBottom:'32px'}}>
								{/* question & empty waring icon */}
								<h3>
									Q{i+1} : {item} 
									
									{ 
										this.state[item] === undefined && 
										<Tooltip placement="topLeft" title="請給分(シ_ _)シ" arrowPointAtCenter>
									      <Icon type="info-circle" style={{color:'#FF0000',marginLeft:'8px'}}/>
									    </Tooltip>
									}
								</h3>
								<Rater {...this.props} setRate={this.setRate} question={item}></Rater>							
							</div>
						)
					})
				} 

				<Button disabled={!isRatedFinish} type="primary" onClick={this.onSubmit} block> 
						提交
				</Button>			 
			</div>
		);
	}
}

export default QuestionBody;
