import React from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import './button.css'

const Button = ({ onClick, children, customStyle, type, disabled, loading }) => 
	(
		<button className="button" style={customStyle} onClick={onClick} type={type} disabled={disabled || loading}> 
			{loading ? 
				<div className="button__loader">
					<CircleLoader color="var(--white)" size={32}/>
				</div> : children
			}
		</button>
	)

export default Button
