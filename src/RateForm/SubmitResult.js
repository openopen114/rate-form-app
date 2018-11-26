import React, { Component } from 'react'; 
import { Card } from 'antd'; 
import './SubmitResult.scss';



class SubmitResult extends Component {

	getAverage = (arr) => {
		return arr.reduce( ( pre, cur ) => pre + cur, 0 ) / arr.length;
	} 


	render() {  
		const {headerInfoData, ratedData} = this.props;

		return (
			<div className="submitResultContainer card1" > 
				{
					/* display classNameSelected userName */
					headerInfoData !== undefined && 
					<Card
						title={headerInfoData.classNameSelected}
						extra={headerInfoData.userName}
						style={{width:'100%'}}>

						{
							/* display rated data */
							ratedData !== undefined && 

							<div className="resultPresentArea">
								<div>
									{
										this.props.questionData.map((item, i) => {
											return <p key={i}>{item} : {ratedData[item]}</p>
										})
									}
								</div>
								<div>
									<h1>
										<span>AVG.</span>
										{
											 this.getAverage(Object.values(ratedData))
										}
									</h1>
								</div>
								 
							</div>

						}
					</Card>
				} 
			</div>
		);
	}
}

export default SubmitResult;
