import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	)
}

//set up default props
Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false,
}
//set up default prop type
Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
}

export default Button
