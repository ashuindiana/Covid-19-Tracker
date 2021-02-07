import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './InfoBox.css'

function InfoBox({ title, cases, isRed, active, theme, total, ...props}) {
	return (
		<Card className={`infoBox 
			${active && "infoBox--selected"}
			${isRed && "infoBox--red"}
			${(theme==='dark') && "infoBox--dark"}
			`} 
			onClick={props.onClick}>
			<CardContent>
				 <Typography color='textSecondary' className={`infoBox__title' ${theme==='dark' && "infoBox__title--dark"}`} >
				 	 {title}
				 </Typography>
				 <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}
				 ${theme==='dark' && "infoBox__cases--dark"}`}>{cases}</h2>
				 <Typography className={`infoBox__total ${theme==='dark' && "infoBox__title--dark"}`} color='textSecondary'>
				 	{total} Total
				 </Typography>
			</CardContent>
		</Card>
	)
}

export default InfoBox;