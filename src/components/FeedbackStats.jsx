import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
	//calculate ratings average
	let average =
		feedback.reduce((accumulator, currentValue) => {
			//sum of all the ratings
			return accumulator + currentValue.rating
		}, 0) / feedback.length

	average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<section className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</section>
	)
}

//set up default prop types
FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
