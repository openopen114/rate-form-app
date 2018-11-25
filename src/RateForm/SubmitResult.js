import React, { Component } from 'react'; 
import { Card } from 'antd'; 
import './SubmitResult.scss';



class SubmitResult extends Component {
	render() {  
		const {headerInfoData, ratedData} = this.props;

		return (
			<div className="submitResultContainer card1" > 
				{
					/* display classNameSelected userName */
					headerInfoData != undefined && 
					<Card
						title={headerInfoData.classNameSelected}
						extra={headerInfoData.userName}
						style={{ width: '100%'}}>

						{
							/* display rated data */
							ratedData != undefined && 

							<div>
								{
									this.props.questionData.map((item, i) => {
										return <p key={i}>{item} : {ratedData[item]}</p>
									})
								} 
							</div>
						}
					</Card>
				} 
			</div>
		);
	}
}

export default SubmitResult;
