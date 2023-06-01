import React, { useContext } from 'react'
import PropTypes from 'prop-types'
//styled components
import Card from './shared/Card'
//icons
import { FaTimes } from 'react-icons/fa'
//context
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
	const { deleteFeedback } = useContext(FeedbackContext)
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

//set up default prop type
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
