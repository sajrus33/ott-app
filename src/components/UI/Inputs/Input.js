import React from 'react'
import '../../../styles/input.css'

const Input = ({
	label,
	info,
	// dataTest,
	input,
	placeholder,
	autoFocus,
	autoComplete,
	type,
	description,
	disabled,
	meta: { error, touched }
}) => {
	const computedDataTest = input.name
	const isError = !!(touched && error)


	return (
		<div data-test={`${computedDataTest}-container`} className="field__container">
			<div className="field__infoWrapper">
				<label data-test={`${computedDataTest}-label`} className="label text--1" htmlFor={input.name}>
					{label}
				</label>
				<p data-test={`${computedDataTest}-mesage`} className="caption text--3">
					{info}
				</p>
			</div>
			{description && (
				<div className="field__descriptionWrapper">
					<p data-test={`${computedDataTest}-description`} className="body_2 text--2">
						{description}
					</p>
				</div>
			)}
			<input
				className="field__input"
				{...input}
				type={type}
				autoFocus={autoFocus}
				autoComplete={autoComplete}
				placeholder={placeholder}
				disabled={disabled}
				data-test={`${computedDataTest}-input`}
				id={input.name}
			/>
			{isError && (
				<p data-test={`${computedDataTest}-error`} className="field__error">
					{error}
				</p>
			)}
		</div>
	)
}

export default Input
