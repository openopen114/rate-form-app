import React, { memo } from 'react';
import { Icon } from 'antd';

function Footer(props) { 
	return (
		<div style={{width:'100%', display:'inline-flex', flexWrap:'nowrap', justifyContent:'center' }}>
			
			<p style={{fontSize:'12px',color:'#FFF'}}>
				<Icon type="smile" theme="twoTone" style={{marginRight:'8px'}} />
				{props.message}
			</p>
		</div>
	)
}

// Wrap component using `React.memo()`
export default memo(Footer);