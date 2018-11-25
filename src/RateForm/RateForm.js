import React, { Component } from 'react';  
import HeaderInfo from './HeaderInfo';
import QuestionBody from './QuestionBody';
import SubmitResult from './SubmitResult';

import './RateForm.scss';


class RateForm extends Component {
  constructor(props){
    super(props); 
    this.state = {}
  }


  //set header information data to state
  setHeaderInfoData = (headerInfoData) => { 
    this.setState({headerInfoData});
  }

  //set rate result data to state
  setRatedResult = (ratedData) => { 
    this.setState({ratedData});
  }

  

  render() { 
  	const { CLASSDATA, QUESTION, GRADE } = this.props ;
   
    return (
      <div className="rateFormContainer">

      	{/*** Form Header Information ***/}
      	<HeaderInfo classData={CLASSDATA} setHeaderInfoData={this.setHeaderInfoData}></HeaderInfo>

      	{/*** Question Body ***/}
      	<QuestionBody questionData={QUESTION} gradeData={GRADE} setRatedResult={this.setRatedResult}></QuestionBody>

      	{/*** Submit Result ***/}
      	<SubmitResult {...this.state} questionData={QUESTION}></SubmitResult>

      </div>
    );
  }
}

export default RateForm;
