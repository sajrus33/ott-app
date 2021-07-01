import React from 'react'
import './style.css'

const Input = ({
	input,
	placeholder,
	type,
	disabled,
	meta: { error, touched }
}) => {
	const isError = !!(touched && error)
	return (
		<div>
			<input
				className="input"
				{...input}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				id={input.name}
			/>
			{isError && (
				<p className="input__error">
					{error}
				</p>
			)}
		</div>
	)
}

export default Input
