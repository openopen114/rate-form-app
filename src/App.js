import React, { Component } from 'react';
import RateForm from './RateForm/RateForm';
import Footer from './Footer';

import './App.css';



class App extends Component {
  render() {
    // rate form config
  	const CLASSDATA = [ '11/07(三) Maven/Spring MVC/Mybatis', '11/16(五) ES6/NodeJS/簡易 前端開發環境建置', '11/21(三) ES6/NodeJS/React Basic', '11/28(三) ES6/React Basic/Axios', '12/11(二) Mirror/Tinper', '12/19(三) WebPack','12/26(三) Redis/Quartz'];
  	const QUESTION = ['難度', '教材', '講師', '安裝', '作業'];
  	const GRADE = [1, 2, 3, 4, 5];

    // rate form data
  	const rateFormData = {};
  	rateFormData.CLASSDATA = CLASSDATA;
  	rateFormData.QUESTION = QUESTION;
  	rateFormData.GRADE = GRADE;


    return (
      <div className="App"> 

  		  {/*** Rate Form ***/}
        <RateForm {...rateFormData}></RateForm>


        <Footer></Footer>
      </div>
    );
  }
}

export default App;
