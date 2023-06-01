import React from 'react'
import PropTypes from 'prop-types'
//styled components
import Card from './shared/Card'
//icons
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button className="close" onClick={() => handleDelete(item.id)}>
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	)
}

//set up default prop type
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
